import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'write' | 'share'>('write');
  const [noteText, setNoteText] = useState("");

  return (
    <div className="app-container">
      {/* Floating Navbar */}
      <nav className="floating-navbar">
        <div className="navbar-container">
          <div className="tab-group">
            <button
              onClick={() => setActiveTab('write')}
              className={`tab-button ${activeTab === 'write' ? 'active' : ''}`}
            >
              WRITE NOTE
            </button>
            <button
              onClick={() => setActiveTab('share')}
              className={`tab-button ${activeTab === 'share' ? 'active' : ''}`}
            >
              SHARE & COPY
            </button>
          </div>
        </div>
      </nav>

      {/* Content area based on active tab */}
      <main className="main-content">
        {activeTab === 'write' ? (
          <div className="editor-section">
            <textarea
              className="editor-textarea"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Start writing something beautiful..."
              autoFocus
            />
            <div className="stats">
              {noteText.length} characters · {noteText.split(/\s+/).filter(Boolean).length} words
            </div>
          </div>
        ) : (
          <div className="share-section">
            <h2>Share your note</h2>
            <button className="copy-button">Copy Link</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;