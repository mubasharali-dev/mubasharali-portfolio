import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import drumkit from "../assets/projects/drumkit.png";
import cartsymedicine from "../assets/projects/cartsymedicine.JPG";
import movieapp from "../assets/projects/movieapp.JPG";
import fyp from "../assets/projects/fyp.png";
import stackoverflow from "../assets/projects/stackoverflow.jpg";
import speech from "../assets/projects/speech.png";
import dicegame from "../assets/projects/dicegame.jpg";
import residencia from "../assets/projects/Residencia.png";
import simon from "../assets/projects/simon.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fyp}
              isBlog={false}
              title="FYP Management System"
              description="This project aims to develop an online platform to facilitate the completion of final year projects (FYP) for the information technology department. The FYP is a crucial component of the department's curriculum, where groups of students work under the guidance of a supervisor to complete a theme-based project. The platform will utilize cutting-edge technology to enhance collaboration and communication among the three key user groups: FYP programme organizers, project supervisors, and project group members. The goal of this project is to create a complete web-based system that streamlines the FYP process and enhances the overall experience for all involved parties."
              ghLink="https://github.com/mubasharali-dev/fyp-management-system/tree/master/fypms-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartsymedicine}
              isBlog={false}
              title="Cartsy Medicine E-commerce App"
              description="I built an e-commerce app for cosmetics that allows users like me to shop for a wide variety of makeup, skincare, and hair care right from our mobile devices. The app contains a user-friendly interface with features such as a search bar, filters, product categories, shopping cart, and a secure checkout process.

              With this app, I can conveniently purchase my favorite beauty products anytime and anywhere without having to leave my house. The intuitive interface makes it easy for me to browse through products, find what I need, and complete my purchase quickly and securely. Overall, this app has made my shopping experience for cosmetics more convenient, enjoyable and user interactive."
              ghLink="https://github.com/mubasharali-dev/e-commerce-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie Data Fetcher App"
              description="I finished working on a movie data fetcher application utilizing HTML, CSS, Bootstrap, and Vanilla JavaScript. The app leverages an API to retrieve information on a vast collection of movies and presents it in a simple and easy-to-navigate format.

              One of the remarkable characteristics of the application is its search capability, allowing users to search for a specific movie effortlessly by utilizing the search bar. Moreover, the app is completely responsive, ensuring that it can be accessed seamlessly on any device.
              
              Developing this project provided me with a valuable chance to revise my coding concepts and improve my programming skills. Check it out on github."
              ghLink="https://github.com/mubasharali-dev/Movie-Data-Fetcher-App"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drum Kit"
              description=" The user must press the keys from the keyboard to play the sound of a drum. Each key produces different notes of music and you can press them as many times as you want. Whenever you tap the key you can notice it on the computer screen. Talking about the Game environment, the graphics are neatly simple. All the gaming function is set from Javascript whereas HTML and CSS are set for the layouts and other minor functions."
              ghLink="https://github.com/Avanishsri31/Drum-Kit-Project.github.io"
              demoLink="https://avanishsri31.github.io/Drum-Kit-Project.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicegame}
              isBlog={false}
              title="Dice Game"
              description="We create the Dice Game using  HTML, Css, and JavaScript. In this game, we have 2 Players and they Play 2 Player Dice Game With All Functionality in the Game."
              ghLink="https://github.com/Avanishsri31/Dice-Game.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="Simon Game is a simple game which goal is for user to repeat the pattern showed by the program. With each round a new step is added to the pattern making, the game much more difficult with every round. Additionally, the program should play a different sound for each field that is activated."
              ghLink="https://github.com/Avanishsri31/Simon-Game.github.io"
              demoLink="https://avanishsri31.github.io/Simon-Game.github.io/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
