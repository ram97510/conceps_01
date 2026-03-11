
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import RegistrationForm from "./pages/RegistrationForm";
import List from "./pages/List";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<VerifyOTP />} />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute><ProductList /></ProtectedRoute>
        } />

        <Route path="/register" element={
          <ProtectedRoute><RegistrationForm /></ProtectedRoute>
        } />

        <Route path="/list" element={
          <ProtectedRoute><List /></ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
