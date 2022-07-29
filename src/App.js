import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header";
import Gallery from './Gallery';
import Footer from './MyComponents/Footer';
import Contact from './MyComponents/Contact';
import LMS from './MyComponents/LMS';
import About from './MyComponents/About';
import LifeAtCampus from './MyComponents/LifeAtCampus'
import FscPreMed from './MyComponents/FscPreMed';
import FscPreEng from './MyComponents/FscPreEng';
import Ics from './MyComponents/Ics';
import Icom from './MyComponents/Icom';
import Fa from './MyComponents/Fa';
import MatricPreMed from './MyComponents/MatricPreMed';
import MatricPreEng from './MyComponents/MatricPreEng';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route index path="/Contact" element={<Contact />} />
          <Route path="/LMS" element={<LMS />} />
          <Route path="/About" element={<About />} />
          <Route path="/LifeAtCampus" element={<LifeAtCampus />} />
          <Route path="/FscPreMed" element={<FscPreMed />} />
          <Route path="/FscPreEng" element={<FscPreEng />} />
          <Route path="/Ics" element={<Ics />} />
          <Route path="/Icom" element={<Icom />} />
          <Route path="/Fa" element={<Fa />} />
          <Route path="/MatricPreMed" element={<MatricPreMed />} />
          <Route path="/MatricPreEng" element={<MatricPreEng />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
