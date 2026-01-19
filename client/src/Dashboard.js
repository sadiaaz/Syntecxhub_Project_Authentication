// src/Dashboard.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/api";
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    api.get("api/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setUser(res.data);
      setLoading(false);
    })
    .catch(err => {
      const status = err.response?.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
      } else if (status === 404) {
        console.log("User not found:", err.response.data);
        setUser(null);
        setLoading(false);
      } else {
        console.error("API Error:", err.response?.data || err.message);
        setLoading(false);
      }
    });
  }, [navigate]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!user) return <p className="error">User not found</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <h2>Welcome, {user.username}</h2>
        <p><strong>Email:</strong> {user.email}</p>

        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
