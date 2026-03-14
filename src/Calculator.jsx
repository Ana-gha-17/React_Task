import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
    const [display, setDisplay] = useState('');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);

    const handleNumber = (number) => {
        if (waitingForNewValue) {
            setDisplay(number.toString());
            setWaitingForNewValue(false);
        } else {
            setDisplay(display === '0' || display === '' ? number.toString() : display + number);
        }
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(display);

        if (operator && waitingForNewValue) {
            setOperator(nextOperator);
            return;
        }

        if (previousValue == null && !isNaN(inputValue)) {
            setPreviousValue(inputValue);
        } else if (operator && !isNaN(inputValue)) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operator);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForNewValue(true);
        setOperator(nextOperator);
    };

    const calculate = (prev, next, op) => {
        switch (op) {
            case '+': return prev + next;
            case '-': return prev - next;
            case '*': return prev * next;
            case '/': return next === 0 ? 'Error' : prev / next;
            default: return next;
        }
    };

    const handleEqual = () => {
        if (!operator || waitingForNewValue) return;

        const inputValue = parseFloat(display);
        const newValue = calculate(previousValue, inputValue, operator);

        setDisplay(String(newValue));
        setPreviousValue(null);
        setOperator(null);
        setWaitingForNewValue(true);
    };

    const clearAll = () => {
        setDisplay('');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForNewValue(false);
    };



    return (
        <div className="calculator-container">
            <div className="calculator">
                <h2>Calculator</h2>
                
                <input 
                    type="text" 
                    placeholder="0" 
                    value={display}
                    readOnly
                    className="calc-input result-input"
                />

                <div className="keypad">
                    {/* First Row */}
                    <button className="op-btn num num-7" onClick={() => handleNumber(7)}>7</button>
                    <button className="op-btn num num-8" onClick={() => handleNumber(8)}>8</button>
                    <button className="op-btn num num-9" onClick={() => handleNumber(9)}>9</button>
                    <button className="op-btn add" onClick={() => handleOperator('+')}>+</button>

                    {/* Second Row */}
                    <button className="op-btn num num-4" onClick={() => handleNumber(4)}>4</button>
                    <button className="op-btn num num-5" onClick={() => handleNumber(5)}>5</button>
                    <button className="op-btn num num-6" onClick={() => handleNumber(6)}>6</button>
                    <button className="op-btn sub" onClick={() => handleOperator('-')}>-</button>

                    {/* Third Row */}
                    <button className="op-btn num num-1" onClick={() => handleNumber(1)}>1</button>
                    <button className="op-btn num num-2" onClick={() => handleNumber(2)}>2</button>
                    <button className="op-btn num num-3" onClick={() => handleNumber(3)}>3</button>
                    <button className="op-btn mul" onClick={() => handleOperator('*')}>*</button>

                    {/* Fourth Row */}
                    <button className="op-btn clear" onClick={clearAll}>C</button>
                    <button className="op-btn num num-0" onClick={() => handleNumber(0)}>0</button>
                    <button className="op-btn equal" onClick={handleEqual}>=</button>
                    <button className="op-btn div" onClick={() => handleOperator('/')}>/</button>
                </div>
            </div>
        </div>
    );
}
