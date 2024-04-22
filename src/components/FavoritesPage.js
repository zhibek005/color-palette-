import React from 'react';
import './FavoritesPage.css'; 

const FavoritesPage = ({ favorites }) => {
    return (
        <div className="favorites-container">
            <h1>Your Favorite Colors</h1>
            <div className="favorites-grid">
                {favorites.map((color, index) => (
                    <div key={index} className="favorite-color">
                        <div className="color-block" style={{ backgroundColor: color }} />
                        <span className="color-value">{color}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
