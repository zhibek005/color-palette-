import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker({ onColorChange }) {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    onColorChange(color.hex);
  };

  return <SketchPicker color={color} onChangeComplete={handleChangeComplete} />;
}

export default ColorPicker;
