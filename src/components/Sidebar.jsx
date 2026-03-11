import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { FaHome, FaBox, FaUserPlus, FaList, FaBars, FaTimes } from "react-icons/fa"; 
import "../styles/sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="mobile-menu-icon" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <h2>Conceps</h2>
        </div>
        
        <nav className="sidebar-links">
          <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
            <FaHome /> <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/products" onClick={() => setIsOpen(false)}>
            <FaBox /> <span>Products</span>
          </NavLink>
          
          <NavLink to="/register" onClick={() => setIsOpen(false)}>
            <FaUserPlus /> <span>Registration</span>
          </NavLink>
          
          <NavLink to="/list" onClick={() => setIsOpen(false)}>
            <FaList /> <span>List</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;