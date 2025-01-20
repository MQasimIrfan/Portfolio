import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dic from "../../Assets/Projects/Dictionary.png";
import ots from "../../Assets/Projects/ots.png";
import store from "../../Assets/Projects/Store1.png";

function Projects() {
  const imageStyle = {
    width: "100%", // Adjust this as needed (e.g., "300px" for specific dimensions)
    height: "200px", // Ensure images are uniform in height
    objectFit: "cover", // Ensures images are cropped properly
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dic}
              imgStyle={imageStyle}
              isBlog={false}
              title="Dictionary Web App"
              description="This app features word saving, read-aloud functionality, and a responsive user interface powered by Bootstrap. By integrating an open-source dictionary API, users can search for word definitions, save their favorite words, and listen to pronunciations, offering a seamless and engaging learning experience."
              ghLink="https://github.com/MQasimIrfan/Dictionary"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              imgStyle={imageStyle}
              isBlog={false}
              title="Style Sphere - Ecommerce Clothes Web App"
              description="Style Sphere is a fully functional ecommerce web application dedicated to fashion and clothing, built using the MERN stack. It provides users with an intuitive platform for browsing and purchasing clothes, offering a modern and sleek shopping experience."
              ghLink="https://github.com/MQasimIrfan/E-Commerce-Store"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ots}
              imgStyle={imageStyle}
              isBlog={false}
              title="Open Testing Service Website Clone"
              description="A clone of the Open Testing Service (OTS) platform using HTML, CSS, Bootstrap for front-end design, and XAMPP for backend data management. This app replicates key OTS functionalities, including applicant selection, skill assessments, and testing, with a responsive UI."
              ghLink="https://github.com/MQasimIrfan/Open-Testing-Service-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
