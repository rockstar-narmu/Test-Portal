import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes> {/* ✅ Wrap Route inside Routes */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
