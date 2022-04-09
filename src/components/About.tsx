import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typewriter from "./TypeWriter";
import BlinkingCursor from "./BlinkingCursor";
import about from "./content/about.json";
import "./styles/About.scss";

const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={5}>
            <Image
              className="about-itachi-img"
              src={process.env.PUBLIC_URL + about.img}
              roundedCircle
              fluid
            />
          </Col>
          <Col className="about-intro" lg={6}>
            <h1>
              Prakhar<span className="about-secondary-color"> Awasthi</span>
              <hr />
            </h1>

            <h2>Hello! I'm an aspiring Software Engineer passionate about</h2>
            <h2>
              <span className="about-secondary-color">
                <Typewriter words={about.interests} />
              </span>
              <BlinkingCursor />
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
