import React from 'react'
import {Carousel} from 'react-bootstrap'
import pro1 from '../assets/proyecto1.png'
import pro2 from '../assets/proyecto2.png'
import pro3 from '../assets/proyecto3.png'
import pro4 from '../assets/proyecto4.png'

const carouselitem = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pro1}
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor:'#a90d5d', borderRadius:'40px'}}>
          <h3>Landing de venta</h3>
          <p>Herramientas utilizadas: HTML (semántico, uso de diferentes etiquetas) y CSS (selectores)</p>
          <p>Puede consultarse <a target='blank' href="https://alexiamata95.github.io/Landing-Venta/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=9e1427ce-6236-4298-aa4d-d8d797ba0c92&submissionId=b4f1bc92-ee95-2274-4bc0-00a14b42dc02">aquí</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pro2}
          alt="Second slide"
        />

        <Carousel.Caption style={{backgroundColor:'#a90d5d', borderRadius:'40px'}}>
          <h3>Aplicación CRUD</h3>
          <p>Herramientas utilizadas: HTML, CSS y JS (localStorage)</p> 
          <p>Puede consultarse <a target='blank' href="https://alexiamata95.github.io/AplicacionCRUD/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=084ca4e8-2330-4b80-98eb-f31bf0437fda&submissionId=ed8e39d5-61ea-45c7-fe28-4bd34f911d40">aquí</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pro3}
          alt="Third slide"
        />

        <Carousel.Caption style={{backgroundColor:'#a90d5d', borderRadius:'40px'}}>
          <h3>Dashboard</h3>
          <p>
          Herramientas utilizadas: HTML, CSS y JS (conexión a APIs)
          </p>
          <p>Puede consultarse <a target='blank' href="https://iridescent-sorbet-774a24.netlify.app/">aquí</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pro4}
          alt="Third slide"
        />

        <Carousel.Caption style={{backgroundColor:'#a90d5d', borderRadius:'40px'}}>
          <h3>Restaurant App</h3>
          <p>
          Herramientas utilizadas: HTML, CSS y JS (nodejs, react (router, components y bootstrap))
          </p>
          <p>Puede consultarse <a target='blank' href="https://main--sage-tapioca-d24815.netlify.app/">aquí</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default carouselitem