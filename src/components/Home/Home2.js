import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have mid level knowledge in classics like
              <i>
                <b className="purple"> C++, jQuery and C </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Ecommerce Services</b>
              </i>
              <br />
              <br />
              But my major expertise is in building Web Products in <br />
              <b className="purple">
                E Commerce Industry <br />
              </b>{" "}
              <br /> My Major and Proficient Tech stacks in which I currently
              work is <br />
              <b className="purple">MERN stack</b>{" "}
              <ol>
                <li className="purple"> MongoDB</li>
                <li className="purple"> Express</li>
                <li className="purple"> React</li>
                <li className="purple"> Node.js</li>
              </ol>
              <i>
                <br /> My Other Programming skills include:
                <br />
                <b className="purple">
                  <ul>
                    <li className="purple"> Bootstrap</li>
                    <li className="purple"> Javascript</li>
                    <li className="purple"> HTML</li>
                    <li className="purple"> CSS</li>
                  </ul>
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MQasimIrfan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
