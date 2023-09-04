import { useState } from "react";
import FinalBoard from "../components/FinalBoard";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const [winner, setWinner] = useState("");

  const receiveScores = (winner: string) => {
    setWinner(winner);
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex flex-col gap-4 h-screen justify-center items-center">
        {winner && (
          <div className="absolute z-20 text-3xl font-bold text-slate-500 glass p-4 rounded-md shadow-lg">
            {winner ? `${winner} is the Winner!!` : "No winner yet!"}
          </div>
        )}
        <FinalBoard sendScores={receiveScores} />
      </div>
      <button
        className="absolute right-10 bottom-10"
        onClick={() => {
          navigate("/");
        }}
      >
        Quit Game
      </button>
    </div>
  );
}

export default GamePage;
