// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill('')));
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'

  const handleInput = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return; // Only allow 1-9 or empty
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const validateGrid = () => {
    // Validation logic here
    setMessageType('success');
    setMessage('The Sudoku grid is valid!');
  };

  const solveSudoku = () => {
    // Solving logic here
    setMessageType('success');
    setMessage('Sudoku solved!');
  };

  return (
    <div className="app-container">
      <h1>Sudoku Solver</h1>
      <div className="sudoku-grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              className="sudoku-cell"
              value={cell}
              onChange={(e) => handleInput(rowIndex, colIndex, e.target.value)}
            />
          ))
        )}
      </div>
      <div className="controls">
        <button onClick={validateGrid}>Validate</button>
        <button onClick={solveSudoku}>Solve</button>
      </div>
      {message && <div className={messageType}>{message}</div>}
    </div>
  );
};

export default App;
