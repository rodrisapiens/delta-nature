import React from 'react'
import { Link } from 'react-router-dom';
import "../../../styles/EducationMainPage.css"
import mariposa from "../../../images/butterflyIcon.png";
import humedal from "../../../images/wetlansIcon.png";
import ecologia from "../../../images/recyclingIcon.png";
import bird from "../../../images/birdIcon.png";
function EducationMainPage() {
  return (
    <div className='EducationMainPage'>
      <h1 className='titleEducationMain'>Educación Ambiental</h1>
      <div className="IconsAndNames">
        <div className="birdSection">
          <img src={bird} alt="" className="bird Icon" />
          <h1 className='iconTitle'>Aves</h1>
        </div>
        <div className="humeSection">
          <h1 className='iconTitle'>Humedales</h1>
          <img src={humedal} alt="" className="humedal Icon" />
        </div>
        <div className="ecoSection">
          <img src={ecologia} alt="" className="ecologia Icon" />
          <h1 className='iconTitle' >Reciclaje</h1>
        </div>
        <div className="mariSection">
          <h1 className='iconTitle'>Mariposas</h1>
          <img src={mariposa} alt="" className="mariposa Icon" />
        </div>
      </div>
      <Link to={"/Education"} className="more">See More!</Link>
    </div>
  )
}

export default EducationMainPage