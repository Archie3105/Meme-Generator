import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Home";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import EditPage from "./pages/Edit";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <div className="container block">
        <h1 className="text-2xl font-medium bg-yellow-500 flex justify-center mt-5 mb-6 m-auto p-2 rounded-xl">
          Meme Generator
        </h1>
        
      <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/edit" element={<EditPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
