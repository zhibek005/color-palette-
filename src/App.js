import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import ColorPalette from './ColorPalette';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);

  const handleColorChange = (newColor) => {
    setColors(prevColors => [...prevColors, newColor]);
  };

  return (
    <div className="App">
      <h1>Color Palette Explorer</h1>
      <ColorPicker onColorChange={handleColorChange} />
      <ColorPalette colors={colors} />
    </div>
  );
}

export default App;

