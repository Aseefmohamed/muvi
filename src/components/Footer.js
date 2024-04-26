import { Container, Row, Col } from "react-bootstrap";

import logo from '../assets/img/1714071536378.png';
import navIcon2 from '../assets/img/pngegg.png';
import navIcon1 from '../assets/img/nav-icon3.svg';
import navIcon3 from '../assets/img/DSxOAUB0raA.png';

export const Footer = () => {
  
  function sendEmail() {
    // Change 'email@example.com' to the desired email address
    var email = 'muvitechnolgies@gmail.com';
    // Creating the mailto link
    var mailtoLink = 'mailto:' + email;
    // Opening the user's email client
    window.location.href = mailtoLink;
  }
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <h1>For Projects contact us </h1>
              <a href= "" onClick={()=>sendEmail()}><img src={navIcon2} alt="" /></a>
                
                <a href="https://api.whatsapp.com/send?phone=8015868478"><img src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/muviprojects?igsh=bWRkdGV2Z2VkYW1w"><img src={navIcon1} alt="" /></a>

            </div>
            <p>&copy; 2024 muvitechnolgies. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
