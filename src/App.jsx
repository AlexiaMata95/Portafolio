import React from 'react';
import './App.css';
import Presentacion from './components/Presentacion';
import Soft from './components/soft';
// import Carouselitem from './components/carouselitem';
import Experience from './components/Experience';
import SkillsTech from './components/SkillsTech';

function App() {
  return (
    <>
      <section>
        <Presentacion />
        <div className="contacto">
          <a href="https://www.linkedin.com/in/alexia-mata171995/" target="_blank" rel="noopener noreferrer">
            <img src="img/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/AlexiaMata95" target="_blank" rel="noopener noreferrer">
            <img src='img/github.png' alt="GitHub" />
          </a>
          <a href="mailto:alexia.i.mata.perez@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src='img/mail.png' alt="Email" />
          </a>
        </div>
        <div className="navbar">
          <a href="#experience" className="navegacion">Experiencia</a>
          <a href="#techskills" className="navegacion">Habilidades</a>
          <a href="#portfolio" className="navegacion">Portafolio</a>
        </div>
        <hr />
      </section>
      
      <section id="experience">
        <div className="experience">
          <h1>Experiencia</h1>
          <Experience/>
        </div>
      </section>
      <hr />
      <section id="techskills">
        <div className="tech">
          <h1>Habilidades técnicas</h1>
          <SkillsTech/>
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
      {/* <section id="portfolio">
        <h2>Portafolio</h2>
        <div className="portfolio">
          <Carouselitem />
        </div>
      </section> */}
    </>
  );
}

export default App;
