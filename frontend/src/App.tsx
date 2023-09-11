import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import GamePage from "./pages/GamePage";
import Rules from "./pages/Rules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/play" element={<GamePage />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
}

export default App;
