import { useState } from "react";
import FinalBoard from "../components/FinalBoard";

function GamePage() {
  const [winner, setWinner] = useState("");
  const [showWinner, setShowWinner] = useState(false);

  const receiveScores = (winner: string) => {
    if (winner) {
      alert(winner);
    }
    setWinner(winner);
  };

  const showWinnerFunc = () => {
    console.log("this is the winner", winner);
    setShowWinner(!showWinner);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 h-screen justify-center items-center">
        <button
          className="absolute left-10 bg-dark-800 text-light-100 rounded-md p-2"
          onClick={showWinnerFunc}
        >
          Show Scores
        </button>
        {showWinner && (
          <div className="banner-cont absolute right-10 top-10 text-3xl font-bold text-light-400">
            {winner ? `${winner} is the Winner!!` : "No winner yet!"}
          </div>
        )}
        <FinalBoard sendScores={receiveScores} />
      </div>
    </div>
  );
}

export default GamePage;
