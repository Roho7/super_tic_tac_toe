import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Type for user data
interface UserData {
  username: string;
  password: string;
  confirmation: string;
}

function Register() {
  const [user, setUser] = useState<UserData>({
    username: "",
    password: "",
    confirmation: "",
  });

  const navigate = useNavigate();

  // Handle updating form
  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (user.password != user.confirmation) {
      alert("password doesn't match");
    } else {
      try {
        console.log(user.username);
        await axios.post("http://localhost:8000/register", user.username);

        navigate("/");
      } catch (err) {
        console.log(err);
      }
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
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Register;
