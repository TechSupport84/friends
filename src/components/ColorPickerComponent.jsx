// ColorPickerComponent.js
import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';




function ColorPickerComponent({ onColorChange }) {
  const [color, setColor] = useColor("hex", "#ffffff");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onColorChange(newColor.hex);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <ColorPicker width={300} height={150} color={color} onChange={handleColorChange} hideHSV dark />
    </div>
  );
}

export default ColorPickerComponent;
