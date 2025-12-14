import { useState } from 'react';
import './App.css';
import './fonts.css';

function App() {
  const [text, setText] = useState('');
  
  return (
    <div className="app-container">
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
    </div>
  
  );
}

export default App;





