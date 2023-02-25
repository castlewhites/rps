import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import Inicio from "../Pages/Inicio/Index";
/* 
import TeAmo from "../pages/TeAmo";
import Felicidad from "../pages/Felicidad";
import AboutUs from "../pages/AboutUs";
import TeInteresa from "../pages/TeInteresa"; */



function RoutesApp() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
        </Routes>
     {/*   
       
        <Routes>
          <Route path="/Te-Amo" element={<TeAmo />} />
        </Routes>
        <Routes>
          <Route path="/Felicidad" element={<Felicidad />} />
        </Routes>
        <Routes>
          <Route path="/Te-interesa" element={<TeInteresa />} />
        </Routes>
        <Routes>
          <Route path="/About-us" element={<AboutUs />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default RoutesApp;
