import React from 'react'
import cv from '../assets/cv.png'

const Presentacion = () => {
  return (
    <div className="bienvenida">
        <img src={cv} alt="" />
        <div className="datos">
            <h1>Alexia Mata</h1>
            <h2>Fullstack Developer</h2>
        </div>
    </div>
  )
}

export default Presentacion