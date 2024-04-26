import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LastPage from "./components/LastPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<LastPage />} />
      </Routes>
    </>
  );
}

export default App;
