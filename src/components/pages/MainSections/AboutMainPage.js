import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/AboutMainPage.css"
import guide from "../../../images/guia.jpg"
import {ReactComponent as Instagram} from "../../../images/instagram.svg"
const instaPage="https://www.instagram.com/deltaytigre/";
function AboutMainPage() {
  return (
    <div className="AboutMainPage">
      <h1 className="aboutMainTitle">Sobre tu guia</h1>
      <div className="midSection">
        <div className="textAndLink">
          <p className="textAboutMain">
            Im Maria Isable Reguero and im the guide for your adventure!I gradueted at  business administration in UBA. worked for many years in the CABA goverment in administration and nature sections. I studied and gradueted from the Tigre tourist guides school and then a became
            a park ranger after having studied 4 years at perito moreno. in all my years of practice, proyects related to nature, formal suties and courses y have learns a lot and have many things to share!
          </p>
          <Link to={"/AboutUs"} className="more">Mas de mi</Link>
        </div>
        <div className="guideContainer">
        <img src={guide} alt="" className="guide" />
        </div>
      </div>
      <div className="footer">
      <Instagram className='instagram' onClick={()=>{window.open(instaPage)}}/>
      <Link to={"/AboutUs"} className="more">Hablemos!</Link>
      </div>
    </div>
  )
}

export default AboutMainPage