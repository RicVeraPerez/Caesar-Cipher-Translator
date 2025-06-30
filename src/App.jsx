import { useState } from 'react';
import './App.css';

function App() {
  const [shift, setShift] = useState(1);
  const [plaintext, setPlaintext] = useState('');
  const [output, setOutput] = useState('');

  const caesarCipher = (string, shift) => {
    return string.replace(/[a-zA-Z]/g, function (c) {
      const base = c < 'a' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
  };

  const translate = (text, shiftValue) => {
    const translated = caesarCipher(text, shiftValue);
    setOutput(translated);
  };

  const handleShiftChange = (e) => {
    const newShift = parseInt(e.target.value) || 0;
    setShift(newShift);
    translate(plaintext, newShift);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setPlaintext(newText);
    translate(newText, shift);
  };

  return (
    <>
      <h2>Caesar Cipher Translator</h2>

      <label>Shift (1–25):</label>
      <input
        type="number"
        min="1"
        max="25"
        value={shift}
        onChange={handleShiftChange}
      />

      <label>Enter Your Text:</label>
      <textarea
        placeholder="Enter your text here..."
        value={plaintext}
        onChange={handleTextChange}
      />

      <h3>Translated text:</h3>
      <p>{output}</p>
    </>
  );
}

export default App;

