import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <textarea
      className= "canvas"
      value = {text}
      onChange={(e) => setText(e.target.value)}
      placeholder="type type type"
    />
  )
}

export default App;