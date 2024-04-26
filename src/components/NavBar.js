import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/1714071536378.png';
import navIcon2 from '../assets/img/pngegg.png';
import navIcon1 from '../assets/img/nav-icon3.svg';


import navIcon3 from '../assets/img/DSxOAUB0raA.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  function connectAndRedirect() {
    console.log('connect');
    // Redirect to WhatsApp
    window.location.href = 'https://wa.me/qr/QCJBYYEFWPSZC1';
  }
  function sendEmail() {
    // Change 'email@example.com' to the desired email address
    var email = 'muvitechnolgies@gmail.com';
    // Creating the mailto link
    var mailtoLink = 'mailto:' + email;
    // Opening the user's email client
    window.location.href = mailtoLink;
  }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" /><h3 style={{ color: 'white', fontWeight: 'bold' }} >Muvi Technologies</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Services</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href= "" onClick={()=>sendEmail()}><img src={navIcon2} alt="" /></a>
                
                <a href="https://api.whatsapp.com/send?phone=8015868478"><img src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/muviprojects?igsh=bWRkdGV2Z2VkYW1w"><img src={navIcon1} alt="" /></a>

              </div>
              <HashLink to='#connect'>
              <button onClick={() => connectAndRedirect()}><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
