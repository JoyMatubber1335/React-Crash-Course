import React, { useState } from "react";

import "./styles.css";
import { Square } from "./Square";

export const Board = () => {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleBoardClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const next = squares.slice();
    if (isX) {
      next[i] = "X";
    } else {
      next[i] = "O";
    }

    setSquares(next);
    setIsX(!isX);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          handelSqureClick={() => handleBoardClick(0)}
        />
        <Square
          value={squares[1]}
          handelSqureClick={() => handleBoardClick(1)}
        />
        <Square
          value={squares[2]}
          handelSqureClick={() => handleBoardClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          handelSqureClick={() => handleBoardClick(3)}
        />
        <Square
          value={squares[4]}
          handelSqureClick={() => handleBoardClick(4)}
        />
        <Square
          value={squares[5]}
          handelSqureClick={() => handleBoardClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          handelSqureClick={() => handleBoardClick(6)}
        />
        <Square
          value={squares[7]}
          handelSqureClick={() => handleBoardClick(7)}
        />
        <Square
          value={squares[8]}
          handelSqureClick={() => handleBoardClick(8)}
        />
      </div>
    </div>
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
};
