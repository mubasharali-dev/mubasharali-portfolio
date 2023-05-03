import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic1 from "../assets/pic1.png";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
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
                <strong className="main-name"> Mubashar Ali </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div>
                <div>
                  <div className="text-center">
                    <img
                      className="img-fluid d-block mx-auto pic1-image"
                      src={pic1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;
