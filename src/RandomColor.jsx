import React, { useState } from 'react';
import './RandomColor.css';

const RandomColor = () => {
  const [color, setColor] = useState('#b0dea2ff');

  const changeColor = () => {
    const hexCharacters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hexCharacters[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
  };

  return (
    <div className="random-container d-flex justify-content-center align-items-center vh-100">
      <div
        className="color-card d-flex justify-content-center align-items-center flex-column gap-3"
        style={{ backgroundColor: color }}
      >
        <div className="color-code">{color}</div>
        <button className="btn random-btn" onClick={changeColor}>Change Background</button>
      </div>
    </div>
  );
};

export default RandomColor;
