import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GamePage from "./pages/GamePage";
// import { AuthProvider } from "./utils/Auth";
// import FinalBoard from "./components/FinalBoard";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/play" element={<GamePage />} />
    </Routes>
  );
}

export default App;
