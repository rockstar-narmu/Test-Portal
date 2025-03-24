import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPassword from "./pages/ResetPassword"; 
import QuestionForm from "./pages/QuestionForm";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
        <Route path="/question-form" element={<QuestionForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
