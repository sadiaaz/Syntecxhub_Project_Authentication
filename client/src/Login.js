// src/Login.js
import { useState } from "react";
import api from "./api/api";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file you provided
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="background-container">
      <div className="login-card p-4">
        <h2 className="text-center mb-3 welcome-text">WELCOME</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
        <p className="small-text text-center mt-3">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>

      </div>
    </div>
  );
}

export default Login;
