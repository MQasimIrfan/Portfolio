import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";

function Home() {
  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Qasim </strong>
              </h1>
              <h1 className="heading-name">
                I specialize in building
                <strong className="main-name"> Web based applications </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}
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
                <br />
                I have mid-level knowledge in classics like
                <i>
                  <b className="purple"> C++ </b>
                </i>
                <br />
                <br />
                My field of interest includes building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also areas related to{" "}
                  <b className="purple">Ecommerce Services</b>
                </i>
                <br />
                <br />
                But my major expertise is in building Web Products in <br />
                <b className="purple">E-Commerce Industry</b>
                <br />
                <br />
                My major and proficient tech stacks are:
                <br />
                <b className="purple">MERN stack</b>
                <ol>
                  <li className="purple"> MongoDB</li>
                  <li className="purple"> Express</li>
                  <li className="purple"> React</li>
                  <li className="purple"> Node.js</li>
                </ol>
                <i>
                  <br />
                  My Other Programming skills include:
                  <br />
                  <b className="purple">
                    <ul>
                      <li className="purple"> Bootstrap</li>
                      <li className="purple"> JavaScript</li>
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

          {/* Social Media Section */}
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect</span> with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/MQasimIrfan"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
