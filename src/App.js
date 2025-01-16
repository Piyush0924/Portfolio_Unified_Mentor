import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import About from './components/About.jsx';
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
    <Navbar/>
    
   <Home />
   <About/>
   <Skills />
   <Projects />
    <Contact />
    <Footer />
    
</div>

  );
}

export default App;
