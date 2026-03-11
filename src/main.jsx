
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./theme/theme.css";
import "./styles/responsive.css";
import "./styles/global.css";

import { ThemeProvider } from "./theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
