import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fisher.png";
import projImg2 from "../assets/img/vpa.jpg";
import projImg3 from "../assets/img/flood.png";
import projImg4 from "../assets/img/block.jpg";
import projImg5 from "../assets/img/plant.jpeg";
import projImg6 from "../assets/img/job.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fisherman Border Crossing Alert System",
      description: "Design & Border Alert System to save the fisher man who crossing the international border. This project mainly focused on the tamilnadu region.",
      imgUrl: projImg1,
    },
    {
      title: "Virtual Personal Assistant by using Hand Gesture for Disabilities",
      description: "Our VPA uses voice and hand sign recognition, powered by NLP and machine learning, for versatile and inclusive user interactions, especially in noisy or for those with speech/hearing impairments.",
      imgUrl: projImg2,
    },
    {
      title: "FLOOD SENSE : SYNTHESIZING AI & GIS FOR PROACTIVE SPATIAL FLOOD ASSESSMENT AND MAPPING",
      description: "Develop a robust flood prediction system using deep learning techniques on Synthetic Aperture Radar (SAR) images.",
      imgUrl: projImg3,
    },
    {
      title: "Blockchain FIR Registration System",
      description: "Online portal for users to file FIRs/complaints on a blockchain network. The portal includes a login system that is integrated with Computer Vision to verify the user's face",
      imgUrl: projImg4,
    },
    {
      title: "Plant Disease Detection using Machine Learning",
      description: "Bases on Leaf images we are trying to predict plant disease using convolutional neural network. PyTorch implementation",
      imgUrl: projImg5,
    },
    {
      title: "Job Seeker Website with Career Bot",
      description: "Our project aims to revolutionize the job search experience by providing a user-friendly platform that not only connects individuals with employment opportunities but also offers personalized career guidance and support along the way.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Popular Projects</h2>
                <p>At "Our Popular Projects," we take pride in our portfolio of successful ventures that have made a positive impact on various fronts. Whether it's technological innovation, community development, or environmental sustainability, our projects are driven by a commitment to excellence and a passion for making a difference.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Domains</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Reviews</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h4 style = {{textAlign: "center"}}>✰ Artificial Intelligence</h4>
                      <h4 style = {{textAlign: "center"}}>✰ Blockchain</h4>
                      <h4 style = {{textAlign: "center"}}>✰ Web Development</h4>
                      <h4 style = {{textAlign: "center"}}>✰ Machine Learning</h4>
                      <h4 style = {{textAlign: "center"}}>✰ Data Science</h4>
                      <h4 style = {{textAlign: "center"}}>✰ Cyber Secruity</h4>

                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h4 style = {{textAlign: "center"}}>Vignesh Kumar | ✰✰✰✰✰</h4>
                      <p>I am Engineering Student. They delivered the project before the time. The quality of the project is good with no bugs.</p>
                      <h4 style = {{textAlign: "center"}}>Nedunchezhiyan | ✰✰✰✰✰</h4>
                      <p>They do Final Year Software Projects. My project is "Flood Prediction in SAR Image with GIS". No project centre in chennai wants do that at affordable price. Muvi Technolgies only can do.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
