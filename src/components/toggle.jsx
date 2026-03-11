import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Filler, 
  Legend 
} from "chart.js";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function Toggle() {
  const { toggleTheme } = useContext(ThemeContext);
   const navigate = useNavigate();

   const handleLogout = () => {
    sessionStorage.removeItem("isVerified");
    // sessionStorage.removeItem("registeredUser");
    navigate("/");
  };

  return (
    <div>
    

      <main className="main-content toggle">
        
        <header className="dashboard-header">
          <div className="header-left">
          </div>
          <div className="header-right">
            <button className="theme-btn" onClick={toggleTheme}> <FaMoon /> </button>
            <button onClick={handleLogout} className="profile-btn"> <FaSignOutAlt /></button>
          </div>
        </header>

      </main>
    </div>
  );
}

export default Toggle;