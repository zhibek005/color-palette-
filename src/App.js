import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ColorPicker from './components/ColorPicker';
import ColorPalette from './components/ColorPalette';
import FavoritesPage from './components/FavoritesPage';
import { generateAnalogousScheme, generateComplementaryScheme, generateTriadicScheme, generateTetradicScheme } from './colorUtils';
import './App.css';
import iconImage from './components/icon.png';

function App() {
    const [started, setStarted] = useState(false);
    const [colors, setColors] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [schemeType] = useState('complementary');

    const handleColorChange = (newColor) => {
        console.log("New color received in App:", newColor);
        let newScheme;
        switch (schemeType) {
            case 'analogous':
                newScheme = generateAnalogousScheme(newColor);
                break;
            case 'triadic':
                newScheme = generateTriadicScheme(newColor);
                break;
            case 'tetradic':
                newScheme = generateTetradicScheme(newColor);
                break;
            default:
                newScheme = generateComplementaryScheme(newColor);
        }
        setColors(newScheme);
    };

    const savePalette = (palette) => {
        localStorage.setItem('savedPalette', JSON.stringify(palette));
    };

    const loadPalette = () => {
        const savedPalette = JSON.parse(localStorage.getItem('savedPalette'));
        if (savedPalette) {
            setColors(savedPalette);
        }
    };

    const exportPaletteAsCSS = () => {
        const css = colors.map((color, index) => `--color-${index}: ${color};`).join('\n');
        navigator.clipboard.writeText(css);
        alert('CSS copied to clipboard!');
    };

    const StartScreen = () => {
        const navigate = useNavigate();
        
        return (
            <div className="app-container">
                <div className="welcome-screen">
                    <h1>HueHub</h1>
                    <button onClick={() => {
                        setStarted(true);
                        navigate('/');
                    }}>Start</button>
                </div>
            </div>
        );
    };

    const MainApp = () => {
        const navigate = useNavigate();

        const addToFavorites = (color) => {
            setFavorites(prevFavorites => [...prevFavorites, color]);

        };

        return (
            <div className="app-container">
                <h1>Color Palette Explorer</h1>
                <div className="hero">
                    <div className="main">
                        <ColorPicker onColorChange={handleColorChange} />
                        <ColorPalette colors={colors} />
                        <div className="icon">
                            <button onClick={() => addToFavorites(colors[0])}> 
                                <img src={iconImage} alt="Icon" style={{ width: '50px', height: 'auto' }} />
                            </button>
                        </div>
                    </div>
                    <div className='menu'>
                        <p>Menu</p>
                        <button onClick={() => savePalette(colors)}>Save Palette</button>
                        <button onClick={loadPalette}>Load Palette</button>
                        <button onClick={exportPaletteAsCSS}>Export as CSS</button>
                        <button onClick={() => {
                            setStarted(false);
                            navigate('/');
                        }}>Return to Start</button>
                        <button onClick={() => navigate('/favorites')}>To Favorites</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!started ? <StartScreen /> : <MainApp />} />
                <Route path="/favorites" element={<FavoritesPage favorites={favorites} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
