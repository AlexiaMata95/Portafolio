import React from 'react';
import { Carousel, Badge } from 'react-bootstrap';
import pro1 from '../assets/proyecto1.png';
import pro2 from '../assets/proyecto2.png';
import pro3 from '../assets/proyecto3.png';
import pro4 from '../assets/proyecto4.png';
import pro5 from '../assets/proyecto5.png'

// Importar logos de las tecnologías
import htmlLogo from '../assets/4.png';
import cssLogo from '../assets/5.png';
import jsLogo from '../assets/6.png';
import nodeLogo from '../assets/9.png';
import reactLogo from '../assets/7.png';
import bootstrapLogo from '../assets/bootstrap.png';
import javaLogo from '../assets/java.png';
import mySQLogo from '../assets/mysql.png';
import springLogo from '../assets/spring.png';

const carouselitem = () => {
  const logoMap = {
    HTML: htmlLogo,
    CSS: cssLogo,
    JS: jsLogo,
    'Node.js': nodeLogo,
    React: reactLogo,
    Bootstrap: bootstrapLogo,
    Java: javaLogo,
    mySQL: mySQLogo,
    Spring : springLogo,
  };

  const carouselItems = [
    {
      src: pro5,
      alt: "First slide",
      title: "E-commerce - Joya del Caribe",
      description: "Proyecto colaborativo fullstack",
      link: "http://13.58.46.147/index.html",
      type: "Colaborativo",
      technologies: ["HTML", "CSS", "JS","React", "Java", "Spring", "mySQL",],
    },
    {
      src: pro2,
      alt: "Second slide",
      title: "Aplicación CRUD - Gaming",
      description: "Uso de localStorage",
      link: "https://alexiamata95.github.io/AplicacionCRUD/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=084ca4e8-2330-4b80-98eb-f31bf0437fda&submissionId=ed8e39d5-61ea-45c7-fe28-4bd34f911d40",
      type: "Individual",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      src: pro3,
      alt: "Third slide",
      title: "Dashboard - PokeApp",
      description: "Uso de conexión a APIs y manipulación del DOM",
      link: "https://iridescent-sorbet-774a24.netlify.app/",
      type: "Colaborativo",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      src: pro4,
      alt: "Fourth slide",
      title: "Restaurant App - Dried Yeca",
      description: "Router, Components y Bootstrap",
      link: "https://main--sage-tapioca-d24815.netlify.app/",
      type: "Individual",
      technologies: ["HTML", "CSS", "JS", "Node.js", "React", "Bootstrap"],
    },
    {
      src: pro1,
      alt: "Fifth slide",
      title: "Landing de venta - Sweeties",
      description: "HTML semántico: uso de diferentes etiquetas y CSS con selectores",
      link: "https://alexiamata95.github.io/Landing-Venta/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=9e1427ce-6236-4298-aa4d-d8d797ba0c92&submissionId=b4f1bc92-ee95-2274-4bc0-00a14b42dc02",
      type: "Individual",
      technologies: ["HTML", "CSS"],
    },
  ];

  const captionStyle = {
    backgroundColor: '#a90d5d',
    borderRadius: '40px',
    padding: '10px',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '2vw',
    right: '0',
    zIndex: '1',
    fontSize: '3vw',
    fontFamily : "'Courier New', Courier, monospace",
  };

  const techBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3vw',
  };

  const techLogoStyle = {
    width: '3vw',
    height: '3vw',
    margin: '0',
  };

  const styleAnchor = {
    color : 'white',
  }

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} style={{ position: 'relative' }}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
          <div style={badgeStyle}>
            <Badge bg="danger">{item.type}</Badge>
            <div style={{ ...badgeStyle, top: '40px' }}>
              <Badge bg="dark" style={techBadgeStyle}>
                {item.technologies.map((tech, techIndex) => (
                  <img key={techIndex} src={logoMap[tech]} alt={tech} style={techLogoStyle} />
                ))}
              </Badge>
            </div>
          </div>
          <Carousel.Caption style={captionStyle}>
          <a target="_blank" rel="noopener noreferrer" href={item.link} style={styleAnchor}><h3>{item.title}</h3></a>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default carouselitem;
