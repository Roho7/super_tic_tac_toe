import { useState } from "react";
import FinalBoard from "../components/FinalBoard";

function GamePage() {
  const [winner, setWinner] = useState("");

  const receiveScores = (winner: string) => {
    setWinner(winner);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 h-screen justify-center items-center">
        {winner && (
          <div className="absolute z-20 text-3xl font-bold text-light-400 bg-light-200 p-4 rounded-md shadow-lg">
            {winner ? `${winner} is the Winner!!` : "No winner yet!"}
          </div>
        )}
        <FinalBoard sendScores={receiveScores} />
      </div>
    </div>
  );
}

export default GamePage;
