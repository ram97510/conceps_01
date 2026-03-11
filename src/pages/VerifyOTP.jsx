import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  
  const FIXED_OTP = "123456"; 

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleContinue = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === FIXED_OTP) {
      sessionStorage.setItem("isVerified", "true");
      navigate("/dashboard");
      
    } else {
      alert("Invalid OTP! Try 123456");
      setOtp(new Array(6).fill("")); 
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Verify your phone</h2>
        <p className="subtitle">Enter <strong>123456</strong> to continue</p>

        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1].focus()}
            />
          ))}
        </div>

        <button className="primary-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;