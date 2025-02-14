import React, { useState } from 'react'
import Hero from './Hero';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const handleLogoClick =()=>{
    document.getElementById('home').scrollIntoView({behavior:'smooth'})
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="logo" onClick={handleLogoClick}>
                <img src="./images/Tatu_logo_orange.svg" alt="Little Lemon Logo" id='logo'/>
            </div>
            <ul id="navList" className={isOpen? "open" : ""}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                <li><a href="#booking" onClick={toggleMenu}>Bookings</a></li>
            </ul>
            <div className="menu-icon" id="navIcon" >
                <i className={isOpen? "fas fa-xmark" : "fas fa-bars"} onClick={toggleMenu}></i>
            </div>
        </nav>
    </div>
  )
}

export default Nav
