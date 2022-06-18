import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing_page/Landing";
import LandingPage from "./pages/LandingPage/LandingPage";


function App() {
  return (
    <div className="App">
      {/* Landing Page  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
