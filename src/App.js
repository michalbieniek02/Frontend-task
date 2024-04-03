import './styles/tailwind.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
