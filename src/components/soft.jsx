import React from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import estres from '../assets/12.png';
import tiempo from '../assets/13.png';
import emocion from '../assets/14.png';
import prod from '../assets/15.png';

const soft = () => {
  const softSkills = [
    { src: estres, alt: "Manejo de estrés", caption: "Manejo de estrés" },
    { src: tiempo, alt: "Gestión del tiempo", caption: "Gestión del tiempo" },
    { src: emocion, alt: "Inteligencia emocional", caption: "Inteligencia emocional" },
    { src: prod, alt: "Productividad personal", caption: "Productividad personal" },
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
  };

  return (
    <Container>
      <Row>
        {softSkills.map((skill, index) => (
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

export default soft;
