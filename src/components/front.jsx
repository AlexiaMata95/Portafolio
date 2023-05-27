import React from 'react'
import {Figure, Container, Row, Col} from 'react-bootstrap'
import html from '../assets/4.png'
import css from '../assets/5.png'
import js from '../assets/6.png'
import react from '../assets/7.png'
const front = () => {
  return (
    <>
    <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={html}
            />
            <Figure.Caption>
              HTML
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={css}
            />
            <Figure.Caption>
              CSS
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={js}
            />
            <Figure.Caption>
              Javascript
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={react}
            />
            <Figure.Caption>
              React
            </Figure.Caption>
            </Figure>
  </>
  )
}

export default front