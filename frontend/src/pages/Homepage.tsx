import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const [widthError, setWidthError] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setWidthError(true);
    }
  });

  if (widthError) {
    return (
      <div className="glass p-3 m-2 h-screen flex flex-col items-center justify-center">
        <h1>&#9888;</h1>
        <h2 className="text-center">Mobile devices not supported</h2>
        <h1 className="text-center">Please play on a larger device</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h2>CS50 Final Project</h2>
        <div className="glass p-8">
          <h1 className="text-8xl text-light-100">Super Tic-Tac-Toe</h1>
        </div>
        <h2>Rohosen Bhattacharya</h2>
        <h2>Kolkata, India</h2>
        <button onClick={() => navigate("/play")} className="">
          Start New Game!
        </button>
        <button onClick={() => navigate("/rules")} className="">
          Rules
        </button>
      </div>
    );
  }
}

export default Homepage;
