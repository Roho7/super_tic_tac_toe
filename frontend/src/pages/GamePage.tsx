import { createElement, useState } from "react";
import FinalBoard from "../components/FinalBoard";

function GamePage() {
  const [winner, setWinner] = useState("");
  const [showWinner, setShowWinner] = useState(false);

  const receiveScores = (winner) => {
    setWinner(winner);
  };

  const showWinnerFunc = () => {
    console.log("this is the winner", winner);
    setShowWinner(!showWinner);
  };

  return (
    <div className="">
      <button
        className="absolute left-10 top-1/2 bg-red-500 p-2"
        onClick={showWinnerFunc}
      >
        Show Scores
      </button>
      <div className="flex h-screen justify-center items-center">
        {showWinner && (
          <div className="banner-cont absolute right-10 top-10 text-3xl font-bold">
            {winner} is the Winner!!
          </div>
        )}
        <FinalBoard sendScores={receiveScores} />
      </div>
    </div>
  );
}

export default GamePage;
