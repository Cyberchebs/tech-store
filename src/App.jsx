import { useState } from "react";
import Home from "./pages/home";
import Detail from "./pages/Detail";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Carttab from "./components/Carttab";

function App() {
  return (
    <div className="min-h-screen  bg-white text-gray-600 text-lg ">
      <Carttab />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
