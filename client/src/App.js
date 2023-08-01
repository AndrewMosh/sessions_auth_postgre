import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful");
        // Redirect to a protected route or display authenticated content
      }
    } catch (error) {
      setMessage("Invalid credentials");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout");
      // Redirect to the login page or home page after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
      </div>

      <div>
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default App;
