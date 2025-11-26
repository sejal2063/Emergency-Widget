import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUser");
    if (loggedIn) {
      navigate("/Home", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }
    const stored = localStorage.getItem(email);
    if (!stored) {
      alert("No user found — please sign up first");
      return;
    }
    const user = JSON.parse(stored);
    if (user.password !== password) {
      alert("Email or password incorrect");
      return;
    }
    localStorage.setItem("loggedInUser", email);
    navigate("/Home", { replace: true });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password:</label><br/>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit" to="/Home">Login</button>
      
       <p className="signup-text"> Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
       </form>
    </div>
  );
};

export default Login;
