import React from 'react'
import {Figure} from 'react-bootstrap'
import firebase from '../assets/8.png'
import node from '../assets/9.png'
import express from '../assets/10.png'
import mongo from '../assets/11.png'

const back = () => {
  return (
    <>
    <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={express}
              style={{backgroundColor:'#FFEAD7'}}
            />
            <Figure.Caption>
              Express JS
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={node}
            />
            <Figure.Caption>
              Node JS
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={firebase}
            />
            <Figure.Caption>
              Firebase
            </Figure.Caption>
            </Figure>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={mongo}
              
            />
            <Figure.Caption>
              MongoDB
            </Figure.Caption>
            </Figure>
  </>
  )
}

export default back