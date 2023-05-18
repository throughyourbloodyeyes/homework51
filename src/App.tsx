import React, { useState } from 'react';
import Ball from './Balls/Balls';
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random()*32) + 5;

      if (!newNumbers.includes(randomNumber)){
        newNumbers.push(randomNumber);
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b))
  };

  return (
    <div>
      <button onClick={generateNumbers} className='button1'>
        New numbers
      </button>
      <div className = "balls-container">
        {numbers.map((number, index) => (
          <Ball key={index} number={number} />
        ))}
      </div>
    </div>
  );
}

export default App;
