import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import ResetPassword from "./pages/ResetPassword";
import QuestionForm from "./pages/QuestionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/Signup" element={<SignUpPage/>}/>
        <Route path="/Userdetails" element={<UserDetails/>}/>
        <Route path="/Reset-password" element={<ResetPassword/>}/>
        <Route path="/questionform" element={<QuestionForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;