import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserData {
  id: number;
  username: string;
  password: string;
}

function Homepage() {
  const navigate = useNavigate();
  const [, setData] = useState<UserData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000");
        setData(res.data);
      } catch {}
    };
    fetchData();
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="glass p-8">
        <h1 className="text-8xl text-light-100">Super Tic-Tac-Toe</h1>
      </div>
      <button onClick={() => navigate("/play")} className="">
        Start New Game!
      </button>
    </div>
  );
}

export default Homepage;
