import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavContext } from './NavContext';

 export const Nav = () => {
  const {isOpen, toggleMenu} = useContext(NavContext);
  const navigate = useNavigate();


    const handleNavClick =(sectionId)=>{
    navigate('/');
    setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'})
    }, 100);
    toggleMenu();
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="logo" onClick={handleNavClick}>
                <img src="/images/Tatu_logo_orange.svg" alt="Tatu Restaurant Logo" id='logo'/>
            </div>
            <ul id="navList" className={isOpen? "open" : ""}>
                <li><Link to="/" onClick={()=>handleNavClick('home')}>Home</Link></li>
                <li><Link to="/" onClick={()=>handleNavClick('blog')}>Blog</Link></li>
                <li><Link to="/" onClick={()=>handleNavClick('about')}>About</Link></li>
                <li><Link to="/" onClick={()=>handleNavClick('menu')}>Menu</Link></li>
                <li><Link to="/" onClick={()=>handleNavClick('booking')}>Booking</Link></li>
                <li><Link to="/" onClick={()=>handleNavClick('contact')}>Contact Us</Link></li>
               
            </ul>
            <div className="menu-icon" id="navIcon" >
                <i className={isOpen? "fas fa-xmark" : "fas fa-bars"} onClick={toggleMenu}></i>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
