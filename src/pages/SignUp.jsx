import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    
    const userData = { email, password };
    sessionStorage.setItem("registeredUser", JSON.stringify(userData));
    
    alert("Account created successfully! Please sign in.");
    navigate("/"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <header className="signup-header">
          <h2>Sign up</h2>
          <p>Already have an Account? <span className="link-text" onClick={() => navigate("/")}>Sign in</span></p>
        </header>

        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="email@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept <span className="link-text">Terms & Conditions</span></label>
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;