import React from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import firebase from '../assets/8.png';
import node from '../assets/9.png';
import express from '../assets/10.png';
import mongo from '../assets/11.png';
import java from '../assets/java.png';
import spring from '../assets/spring.png';
import mysql from '../assets/mysql.png';

const Back = () => {
  const techSkills = [
    { src: express, alt: "Express JS", caption: "Express JS" },
    { src: node, alt: "Node JS", caption: "Node JS" },
    { src: java, alt: "Java", caption: "JAVA" },
    { src: spring, alt: "Spring", caption: "Spring boot" },    
    { src: firebase, alt: "Firebase", caption: "Firebase" },
    { src: mongo, alt: "MongoDB", caption: "MongoDB" },
    { src: mysql, alt: "MySQL", caption: "MySQL" }
  ];

  const figureStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0',
  };

  const imageStyle = {
    width: '15vw', // Ajusta según sea necesario
    height: '15vw', // Ajusta según sea necesario
    objectFit: 'fill', // Asegura que las imágenes se ajusten al tamaño sin distorsionarse
    margin: '0',
    borderRadius: '4vw'
  };

  return (
    <Container>
      <Row>
        {techSkills.map((skill, index) => (
          <Col key={index} xs={3} md={3} lg={3} className="mb-4">
            <Figure style={figureStyle}>
              <Figure.Image
                style={imageStyle}
                alt={skill.alt}
                src={skill.src}
              />
              <Figure.Caption>
                {skill.caption}
              </Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>
      </Container>
  );
}

export default Back;
