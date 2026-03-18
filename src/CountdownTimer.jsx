import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';
export default function CountdownTimer() {
    const [time, setTime] = useState(10);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {

            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleStart = () => {
        setIsActive(true);
    };

    return (
        <div className="countdown-container">
            <div className="content">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className="timer">{time}</p>
                    <div className="item">s</div>
                </div>
                <button onClick={handleStart} disabled={isActive && time > 0}>
                    Start Countdown
                </button>
            </div>
        </div>
    );
}
