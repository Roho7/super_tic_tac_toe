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
          <div className="absolute flex flex-col items-center gap-4 z-20 text-5xl font-bold text-gray-50 glass p-4 rounded-md shadow-lg">
            {winner ? `${winner} is the Winner!!` : "No winner yet!"}
            <h1
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => {
                window.location.reload();
              }}
            >
              Restart
            </h1>
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
