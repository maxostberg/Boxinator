import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBoxPage from "./pages/AddBoxPage";
import DispatchesPage from "./pages/DispatchesPage";
import WelcomePage from "./pages/WelcomePage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/addbox" element={<AddBoxPage />} />
          <Route path="/listboxes" element={<DispatchesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
