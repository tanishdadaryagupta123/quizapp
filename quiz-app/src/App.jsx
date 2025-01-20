import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import ReportPage from "./pages/ReportPage";
import "./styles/index.scss";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}


export default App;
