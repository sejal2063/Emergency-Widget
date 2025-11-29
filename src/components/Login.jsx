import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedInUser")) {
      navigate("/Home", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Email and password are required");

    const stored = localStorage.getItem(email);
    if (!stored) return alert("No user found — please sign up first");

    const user = JSON.parse(stored);
    if (user.password !== password) return alert("Email or password incorrect");

    localStorage.setItem("loggedInUser", email);
    navigate("/Home", { replace: true });
  };

  return (
    <div className="login-container">
      <h2 className="text-center mb-3">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-2 text-center">
        Don't have an account? <Link to="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
