import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

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
    </div>
  );
}

export default Homepage;
