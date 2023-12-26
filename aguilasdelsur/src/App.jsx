import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Landing, Home, About, Galery, Contact } from "./views/index";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";


function App() {

  const location = useLocation();

  React.useEffect(() => {
    window.scroll(0,0);
  },[location]);
  
  return (
    <div className="container-fluid background-container">
      {location.pathname !== "/" && <NavBar />}
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery"  element={<Galery />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App
