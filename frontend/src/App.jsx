import React from "react";
import "./style/index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FeatureSection from './components/Feature/FeatureSection/FeatureSection';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}
