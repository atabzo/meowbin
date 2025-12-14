import { useState } from 'react';
import './App.css';
import './fonts.css';


function App() {
  const [text, setText] = useState('');


  return (  // ← Only ONE return!
    <textarea
      className="canvas"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="type type type"
      spellCheck={false}  // ← This turns off the red squiggly lines
      autoComplete="off"  // ← This turns off autocomplete suggestions
      autoCorrect="off"   // ← This turns off auto-correction on mobile
      autoFocus
    />
  );
}

export default App;