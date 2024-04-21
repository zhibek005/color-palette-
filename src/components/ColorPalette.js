import React from 'react';
import styles from './ColorPicker.css';

function ColorPalette({ colors }) {
  return (
    <div className={styles.palette}>
      {colors.map((color, index) => (
        <div key={index} className={styles.paletteColor} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}


export default ColorPalette;
