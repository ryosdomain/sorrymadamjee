import React, { useState } from "react";
import Header from "./header";
import Rock from "../assets/images/rock.png";
import Paper from "../assets/images/paper.png";
import Scissor from "../assets/images/Scissor.png";

const images = {
  Rock: Rock,
  Paper: Paper,
  Scissors: Scissor,
};

const RockPaperScissors = () => {
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ you: 0, computer: 0 });

  function play(playerChoice) {
    const options = ["Rock", "Paper", "Scissors"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let outcome = "";
    if (playerChoice === computerChoice) {
      outcome = "It's a draw!";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      outcome = "You win!";
      setScore((prev) => ({ ...prev, you: prev.you + 1 }));
    } else {
      outcome = "Computer wins!";
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }

    setPlayer(playerChoice);
    setComputer(computerChoice);
    setResult(outcome);
  }

  function restart() {
    setPlayer("");
    setComputer("");
    setResult("");
    setScore({ you: 0, computer: 0 });
  }

  return (
    <div>
      <Header />
      <div className="my-10">
        <div className="flex h-50 md:h-100 px-5 gap-5 mt-5">
          <div className="bg-white w-full flex items-center justify-center flex-col">
            {player && (
              <img className="w-20 h-20 md:w-40 md:h-40" src={images[player]} alt={player} />
            )}
            <h2 className=" lg:text-2xl font-bold">PLayer's Choise</h2>
          </div>
          <div className="bg-white w-full flex items-center justify-center flex-col">
            {computer && (
              <img
                className="w-20 h-20 md:w-40 md:h-40"
                src={images[computer]}
                alt={computer}
              />
            )}
            <h2 className=" md:text-2xl font-bold">Computers's Choise</h2>
          </div>
        </div>

        <h3 className="text-center text-xl mt-5 text-white">
          You: {score.you} | Computer: {score.computer}
        </h3>
        {result && (
          <div className="text-center mt-5">
            <h2 className="text-2xl text-white font-bold">{result}</h2>
          </div>
        )}
      </div>

      <div className=" text-center">
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => play("Rock")}>
            <img className="w-20 h-20 active:scale-95" src={Rock} alt="Rock" />
          </button>
          <button
            className="bg-white rounded-full active:scale-90"
            onClick={() => play("Paper")}
          >
            <img
              className="w-20 h-20 active:scale-95"
              src={Paper}
              alt="Paper"
            />
          </button>
          <button onClick={() => play("Scissors")}>
            <img
              className="w-20 h-20 active:scale-95"
              src={Scissor}
              alt="Scissors"
            />
          </button>
        </div>

        <button onClick={restart} className="bg-yellow-400/80 border border-y-amber-500 outline outline-yellow-400 outline-offset-2 shadow rounded-lg text-2xl my-5 px-2 py-1 ">
          Restart
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;
