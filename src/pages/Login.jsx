import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Import CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
