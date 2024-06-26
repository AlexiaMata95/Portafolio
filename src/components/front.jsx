import React from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import html from '../assets/4.png';
import css from '../assets/5.png';
import js from '../assets/6.png';
import react from '../assets/7.png';
import bootstrap from '../assets/bootstrap.png';

const front = () => {
  const techSkills = [
    { src: html, alt: "HTML", caption: "HTML" },
    { src: css, alt: "CSS", caption: "CSS" },
    { src: js, alt: "Javascript", caption: "Javascript" },
    { src: react, alt: "React", caption: "React" },
    { src: bootstrap, alt: "Bootstrap", caption: "Bootstrap" },
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
    objectFit: 'cover', // Asegura que las imágenes se ajusten al tamaño sin distorsionarse
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

export default front;
