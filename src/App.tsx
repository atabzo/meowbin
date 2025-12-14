import { useState } from 'react';
import { Cat, Save } from 'lucide-react'; // 1. Import icons here
import './App.css';
import './fonts.css';

function App() {
  const [text, setText] = useState('');
  
  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="welcome-text"> <span className="meowbin-text">meowbin!</span></h1>
      </div>

      <div className="sidebar"> 
        <ul className="sidebar-list">
          {/* 3. Used Icon Components (<Cat />) instead of <i> tags */}
          <li>
            <button className="sidebar-btn">
              <Cat size={24} /> 
            </button>
          </li>
          <li>
            <button className="sidebar-btn">
              <Save size={24} />
            </button>
          </li>
        </ul>
        <div className="sidebar-footer">
          {/* You can style this specifically via className if needed */}
          <Cat className="footer-icon" size={24} />
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


