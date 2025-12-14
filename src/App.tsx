import { useState } from 'react';
import './App.css';

type Tab = 'write' | 'share';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('write');
  const [noteText, setNoteText] = useState("");

  return (
    <div className="app-container">
      {/* Brutalist Header */}
      <header className="brutalist-header">
        <div className="header-title">
          🐱 MEOWBIN — YOUR ELEGANT NOTEBIN
        </div>
        <nav className="header-nav">
          <button 
            onClick={() => setActiveTab('write')}
            className={`nav-item ${activeTab === 'write' ? 'active' : ''}`}
          >
            ✏️ Write
          </button>
          <button 
            onClick={() => setActiveTab('share')}
            className={`nav-item ${activeTab === 'share' ? 'active' : ''}`}
          >
            🔗 Share
          </button>
          <button className="nav-item">
            ℹ️ About
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'write' ? (
          <div className="editor-section">
            <textarea
              className="editor-textarea"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Start writing..."
              autoFocus
            />
            <div className="stats">
              {noteText.length} characters · {noteText.split(/\s+/).filter(Boolean).length} words
            </div>
          </div>
        ) : (
          <div className="share-section">
            <h2>Share your note</h2>
            <button className="copy-button">COPY LINK</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;