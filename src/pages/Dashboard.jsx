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

import Toggle from "../components/toggle";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function Dashboard() {
  const { toggleTheme } = useContext(ThemeContext);
   const navigate = useNavigate();

  const earningsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      fill: true,
      label: "Earnings",
      data: [15, 22, 18, 25, 12, 34, 20, 28, 15, 22, 18, 20],
      borderColor: "#3E97FF",
      backgroundColor: "rgba(62, 151, 255, 0.1)",
      tension: 0.4,
    }]
  };

  const socialStats = [
    { platform: "LinkedIn", value: "9.3k", label: "Amazing mates", color: "#0077b5" },
    { platform: "YouTube", value: "24k", label: "Lessons Views", color: "#ff0000" },
    { platform: "Instagram", value: "608", label: "New subscribers", color: "#e1306c" },
    { platform: "TikTok", value: "2.5k", label: "Stream audience", color: "#000000" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      

      <main className="main-content">
        
        <header className="dashboard-header">
          
          <div className="header-left">
            <h1>Dashboard</h1>
            <p>Central Hub for Personal Customization</p>
          </div>
           <Toggle />
          {/* <div className="header-right">
            <button className="theme-btn" onClick={toggleTheme}> <FaMoon /> </button>
            <button onClick={() => navigate("/")} className="profile-btn"> <FaSignOutAlt /></button>
          </div> */}
        </header>

        <div className="dashboard-grid">
          <div className="social-grid">
            {socialStats.map((s, i) => (
              <div key={i} className="stat-card">
                <span className="icon" style={{color: s.color}}>●</span>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          <div className="promo-banner">
            <div className="promo-content">
              <h2>Connect Today & Join the <span>KeenThemes Network</span></h2>
              <p>Enhance your projects with premium themes and templates.</p>
              <button className="btn-primary">Get Started</button>
            </div>
            <div className="promo-img-placeholder"></div>
          </div>

          <div className="card highlights-card">
            <h3>Highlights</h3>
            <div className="sales-total">
              <span className="amount">$295.7k</span>
              <span className="badge">+2.7%</span>
            </div>
            <div className="sales-list">
              <div className="list-item"><span>Online Store</span> <span>$172k</span></div>
              <div className="list-item"><span>Facebook</span> <span>$85k</span></div>
            </div>
          </div>

         
          <div className="card earnings-card">
            <div className="card-header">
              <h3>Earnings</h3>
              <select><option>12 Months</option></select>
            </div>
            <div className="chart-container">
              <Line data={earningsData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;