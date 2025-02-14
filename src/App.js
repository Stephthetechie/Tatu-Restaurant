import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Booking from './components/Booking';
import Card from './components/Card';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import FormDialog from './components/FormDialog';
import MenuPage from './components/MenuPage';
function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
          <Routes>
            <Route path="/" element={
              <> 
              <Hero/>
              <Card/>
              <About/>
              <Carousel/>
              <Booking/>
              <Contact/>

              </>
             } 
              />
            <Route path="/about" element={<About/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/menu" element={<Carousel/>} />
            <Route path="/menu/:id" element={<MenuPage/>} />
            <Route path="/form" element={<FormDialog/>} />
          </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
