import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/otp");
    } else {
      alert("Invalid email or password. Did you sign up?");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Sign in</h2>
          <p>Need an account? <span className="link" onClick={() => navigate("/signup")}>Sign up</span></p>
        </div>

        <form onSubmit={login} className="auth-form">
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com" 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password" 
              required 
            />
          </div>

          <button type="submit" className="signin-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;