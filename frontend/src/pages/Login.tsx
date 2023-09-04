import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../utils/Auth";

// Type for user data
interface UserData {
  username: string;
  password: string;
}

function Login() {
  const [user, setUser] = useState<UserData>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle updating form
  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-200 justify-center items-center gap-4">
      <h1 className="text-xl">Register</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
