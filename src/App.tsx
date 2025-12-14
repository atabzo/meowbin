import { useState, useEffect } from 'react';
import { Workflow, Save, Check } from 'lucide-react'; // Added Check icon
import './App.css';
import './fonts.css';

function App() {
  const [text, setText] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false); // State for the green checkmark

  // --- 1. Load Note on Start (Replaces the script loading logic) ---
  useEffect(() => {
    // Check for hash in URL (Shared note)
    if (window.location.hash) {
      try {
        const decoded = decodeURIComponent(atob(window.location.hash.substring(1)));
        setText(decoded);
      } catch (e) {
        console.error('Error loading shared note', e);
      }
    } else {
      // Check LocalStorage
      const savedNote = localStorage.getItem('meowbin_draft');
      if (savedNote) setText(savedNote);
    }
  }, []); // Empty dependency array = runs once on mount

  // --- 2. Save Functionality ---
  const handleSave = () => {
    localStorage.setItem('meowbin_draft', text);
    
    // Show green checkmark logic
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1500);
  };

  // --- 3. Publish Functionality ---
  const handlePublish = () => {
    if (!text.trim()) {
      alert("Write something first!");
      return;
    }

    try {
      const encodedText = btoa(encodeURIComponent(text));
      // Construct URL (safe for TS)
      const uniqueUrl = `${window.location.origin}${window.location.pathname}#${encodedText}`;

      navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Unique URL copied to clipboard!");
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } catch (e) {
      console.error("Encoding failed", e);
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <span className="meowbin-text">meowbin!</span>
      </div>

      <div className="sidebar"> 
        <ul className="sidebar-list">
          {/* Publish Button */}
          <li>
            <button className="sidebar-btn" onClick={handlePublish} title="Publish / Share">
              <Save size={24} /> 
            </button>
          </li>
          
          {/* Save Button */}
          <li>
            <button className="sidebar-btn" onClick={handleSave} title="Save to LocalStorage">
              {/* Conditional Rendering: Show Check if saved, otherwise Save icon */}
              {isSaved ? <Check size={24} color="green" /> : <Workflow size={24} />}
            </button>
          </li>
        </ul>
        <div className="sidebar-footer">
          <Workflow className="footer-icon" size={24} />
        </div>
      </div>

      <div className="canvas-wrapper">
        <textarea
          className="canvas"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="type type type?"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          autoFocus
        />
      </div>
      <div className="cat-image"></div>
    </div>
  );
}

export default App;