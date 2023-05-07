import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
