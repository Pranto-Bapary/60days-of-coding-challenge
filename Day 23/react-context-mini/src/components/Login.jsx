import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <div>
        <h2 className="text-blue-800 font-bold text-4xl mb-5">Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full border-2 border-blue-800 px-4 py-2 rounded mb-5"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full border-2 border-blue-800 px-4 py-2 rounded mb-3"
        />
        <div className="text-left">
          <button onClick={handleSubmit}
          className="inline-block px-4 py-2 rounded-xl bg-blue-100 cursor-pointer hover:bg-blue-200 transition"
          >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
