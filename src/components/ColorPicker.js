import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import chroma from 'chroma-js';
import styles from './ColorPicker.css';

function ColorPicker({ onColorChange }) {
    const [color, setColor] = useState({ h: 200, s: 0.5, l: 0.5 });

    const handleChange = (pickedColor) => {
        setColor(pickedColor.hsl);
        onColorChange(pickedColor.hex);
    };

    const handleHueChange = (newHue) => {
        const newColor = { ...color, h: newHue };
        setColor(newColor);
        onColorChange(chroma.hsl(newHue, color.s, color.l).hex());
    };

    const handleSaturationChange = (newSaturation) => {
        const newColor = { ...color, s: newSaturation };
        setColor(newColor);
        onColorChange(chroma.hsl(color.h, newSaturation, color.l).hex());
    };

    const handleLightnessChange = (newLightness) => {
        const newColor = { ...color, l: newLightness };
        setColor(newColor);
        onColorChange(chroma.hsl(color.h, color.s, newLightness).hex());
    };

    return (
        <div className={styles.colorPickerContainer}>
            <SketchPicker
                color={chroma.hsl(color.h, color.s, color.l).hex()}
                onChange={handleChange}
            />
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Hue:</label>
                    <input type="range" min="0" max="360" value={color.h} onChange={(e) => handleHueChange(parseFloat(e.target.value))} />
                </div>
                <div className={styles.control}>
                    <label>Saturation:</label>
                    <input type="range" min="0" max="1" step="0.01" value={color.s} onChange={(e) => handleSaturationChange(parseFloat(e.target.value))} />
                </div>
                <div className={styles.control}>
                    <label>Lightness:</label>
                    <input type="range" min="0" max="1" step="0.01" value={color.l} onChange={(e) => handleLightnessChange(parseFloat(e.target.value))} />
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
