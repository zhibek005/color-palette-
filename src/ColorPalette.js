import React from 'react';

function ColorPalette({ colors }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
      {colors.map(color => (
        <div key={color} style={{ backgroundColor: color, width: '50px', height: '50px', margin: '5px' }} />
      ))}
    </div>
  );
}

export default ColorPalette;
