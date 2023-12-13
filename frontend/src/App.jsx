import React from "react";
import { Routes, Route } from "react-router-dom"
import "./style/index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Root from "./pages/Root/Root";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
