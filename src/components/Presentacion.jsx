import React from 'react'
import cv from '../assets/cv.png'
import link from '../assets/16.png'
import git from '../assets/17.png'

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