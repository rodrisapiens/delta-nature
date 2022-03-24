import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/AboutMainPage.css"
import guide from "../../../images/guia.jpg"
import { ReactComponent as Instagram } from "../../../images/instagram.svg"
const instaPage = "https://www.instagram.com/deltaytigre/";
function AboutMainPage() {
  return (
    <div className="AboutMainPage">
      <h1 className="aboutMainTitle">Sobre mi</h1>
      <div className="midSection">
        <div className="textAndLink">
          <p className="textAboutMain">
            Hola! Soy Maria Isabel Reguero.
            estudié administración en UBA,
            Soy Guia de turismo De tigre y
            guardaparques nacional.
          </p>
          <p className="textAboutMain">
            Soy miembro del centro de
            observacion de aves (COA) y participé
            de varias iniciativas ambientales.
            por ejemplo:
          </p>
          <ul className='AboutList'> 
            <li className="textAboutMain">Reserva natural ricon de Milberg,tigre</li>
            <li className="textAboutMain" >Biocorredor Paul Groussac,El Talar</li>
            <li className="textAboutMain">Voluntariado en Comandante Andresito,Misiones</li>
          </ul>
          <Link to={"/AboutUs"} className="more">Más de mi</Link>
        </div>
        <div className="guideContainer">
          <img src={guide} alt="" className="guide" />
        </div>
      </div>
      <div className="footer">
        <Instagram className='instagram' onClick={() => { window.open(instaPage) }} />
        <Link to={"/AboutUs"} className="more">Hablemos!</Link>
      </div>
    </div>
  )
}

export default AboutMainPage