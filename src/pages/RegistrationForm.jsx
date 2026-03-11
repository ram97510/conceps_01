import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/RegistrationForm.css";
import Toggle from "../components/toggle";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    department: "",
    state: "",
    city: "",
    address: "",
    working: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.fullName || !formData.email || !formData.contact) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    
    sessionStorage.setItem("registrationData", JSON.stringify(formData));
    alert("Form submitted !");
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <header className="form-header">
          <div className="header-flex">
            <div>
              <h2>Registration Form</h2>
              <p className="subtitle">Central Hub for Personal Customization</p>
            </div>
            <Toggle />
          </div>
        </header>

        <form className="reg-form" onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="form-group">
              <label>Full Name*</label>
              <input name="fullName" type="text" placeholder="Full Name*" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Address*</label>
              <input name="email" type="email" placeholder="Email Address*" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Contact Number*</label>
              <input name="contact" type="text" placeholder="Contact Number*" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Department*</label>
              <select name="department" onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="hr">HR</option>
                <option value="it">IT</option>
              </select>
            </div>
            <div className="form-group">
              <label>State*</label>
              <select name="state" onChange={handleChange} required>
                <option value="">Select State</option>
                <option value="state1">State 1</option>
              </select>
            </div>
            <div className="form-group">
              <label>City*</label>
              <select name="city" onChange={handleChange} required>
                <option value="">Select City</option>
                <option value="city1">City 1</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea name="address" placeholder="Address" rows="3" onChange={handleChange}></textarea>
          </div>

          <div className="selection-section">
            <label>Currently Working or not</label>
            <div className="radio-group" onChange={handleChange}>
              <label><input type="radio" name="working" value="yes" /> Yes</label>
              <label><input type="radio" name="working" value="no" /> No</label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default RegistrationForm;