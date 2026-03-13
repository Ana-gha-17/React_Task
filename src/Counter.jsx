import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h1 className="counter-number">{count}</h1>

            <button
                className="counter-btn"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;