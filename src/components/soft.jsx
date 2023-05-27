import React from 'react'
import {Figure} from 'react-bootstrap'
import estres from '../assets/12.png'
import tiempo from '../assets/13.png'
import emocion from '../assets/14.png'
import prod from '../assets/15.png'

const soft = () => {
  return (
    <>
    <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={estres}
            />
            <Figure.Caption>
              Manejo de estrés
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={tiempo}
            />
            <Figure.Caption>
              Gestión del tiempo
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={emocion}
            />
            <Figure.Caption>
              Inteligencia emocional
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={prod}
              
            />
            <Figure.Caption>
              Productividad personal
            </Figure.Caption>
            </Figure>
  </>
  )
}

export default soft