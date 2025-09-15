import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidehustles from "./components/Sidehustles";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Sidehustles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
