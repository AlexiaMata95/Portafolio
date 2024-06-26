import React from 'react';
import './App.css';
import Presentacion from './components/Presentacion';
import desc from './assets/2.png';
import hobbies from './assets/1.png';
import diploma from './assets/3.png';
import Front from './components/front';
import Back from './components/back';
import Soft from './components/soft';
import link from './assets/16.png';
import git from './assets/17.png';
import mail from './assets/mail.png';
import Carouselitem from './components/Carouselitem';

function App() {
  return (
    <>
      <section>
        <Presentacion />
        <div className="contacto">
          <a href="https://www.linkedin.com/in/alexia-mata171995/" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="LinkedIn" />
          </a>
          <a href="https://github.com/AlexiaMata95" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" />
          </a>
          <a href="mailto:alexia.i.mata.perez@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="Email" />
          </a>
        </div>
        <div className="navbar">
          <a href="#about-me" className="navegacion">Acerca de mí</a>
          <a href="#techskills" className="navegacion">Habilidades</a>
          <a href="#portfolio" className="navegacion">Portafolio</a>
        </div>
        <hr />
      </section>
      <section id="about-me">
        <div className="aboutme">
          <div><h1>Acerca de mí</h1></div>
          <ul style={{ margin: '0', padding: '0' }}>
            <li><img src={desc} alt="Descripción" />Me llamo Alexia Mata, tengo 27 años y nací en Cuernavaca, México</li>
            <li><img src={hobbies} alt="Hobbies" />Mis hobbies son: jugar videojuegos, cocinar y leer libros</li>
            <li><img src={diploma} alt="Diploma" />Soy ingeniera petrolera, maestra en sustentabilidad y desarrolladora fullstack</li>
          </ul>
        </div>
      </section>
      <hr />
      <section id="techskills">
        <div className="tech">
          <h1>Habilidades tecnológicas</h1>
          <h2>Frontend</h2>
          <div className="frontend">
            <Front />
          </div>
          <h2>Backend</h2>
          <div className="backend">
            <Back />
          </div>
        </div>
        <hr />
        <div className="tech">
          <h1>Habilidades blandas</h1>
          <div className="blandas">
            <Soft />
          </div>
        </div>
      </section>
      <hr />
      <section id="portfolio">
        <h2>Portafolio</h2>
        <div className="portfolio">
          <Carouselitem />
        </div>
      </section>
    </>
  );
}

export default App;
