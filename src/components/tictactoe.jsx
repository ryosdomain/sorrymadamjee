import React from "react";
import { useState } from "react";
import Header from "./header";

const tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");

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
  // find winner
  let winner = "";
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  }

  function play(i) {
    if (board[i] || winner) return;
    const copy = [...board];
    copy[i] = turn;
    setBoard(copy);
    setTurn(turn === "X" ? "O" : "X");
  }

  function restart() {
    setBoard(Array(9).fill(""));
    setTurn("X");
  }
  return (
    <div>
        <Header />
      <div className="mt-20 w-65 lg:w-90 m-auto text-center">
        <h1 className="text-4xl font-bold text-white/80 ">Tic Tac Toe</h1>
        <h3 className="text-2xl text-white/80">{winner ? `Winner: ${winner}` : `Turn: ${turn}`}</h3>

        <div
        className="mt-5 grid grid-cols-3 gap-5 justify-center items-center"
          
        >
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => play(i)}
             className="bg-yellow-400/80 w-20 h-20 lg:h-28 lg:w-28 text-4xl rounded outline outline-yellow-400 outline-offset-1"
            >
              {cell}
            </button>
          ))}
        </div>

        <button onClick={restart} className="bg-yellow-400/80 border border-y-amber-500 outline outline-yellow-400 outline-offset-2 shadow rounded-lg text-2xl my-5 px-2 py-1 ">
          Restart
        </button>
      </div>
    </div>
  );
};

export default tictactoe;
