import React from 'react';

function FavoritesColor({ favorites }) {
    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesColor;
