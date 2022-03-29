import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../../styles/EducationMainPage.css"
import mariposa from "../../../images/butterflyIcon.png";
import humedal from "../../../images/wetlansIcon.png";
import ecologia from "../../../images/recyclingIcon.png";
import bird from "../../../images/birdIcon.png"; 
import {miniInfo} from "../../../api.js"
function EducationMainPage() {
  const [birdOn,setBirdOn]=useState(false);
  const [humeOn,setHumeOn]=useState(false);
  const [ecoOn,setEcoOn]=useState(false);
  const [mariOn,setMariOn]=useState(false);
   function handleSectionClicked(e)
  {
    if(e.currentTarget.classList[0]==="birdSection")
    {
      setMariOn(false)
      setEcoOn(false)
      setHumeOn(false)
      setBirdOn(!birdOn)
    }
    if(e.currentTarget.classList[0]==="humeSection")
    {
      setMariOn(false)
      setEcoOn(false)
      setBirdOn(false)
      setHumeOn(!humeOn)
    }if(e.currentTarget.classList[0]==="ecoSection")
    {
      setMariOn(false)
      setHumeOn(false)
      setBirdOn(false)
      setEcoOn(!ecoOn)
    }if(e.currentTarget.classList[0]==="mariSection")
    {
      setHumeOn(false)
      setBirdOn(false)
      setEcoOn(false)
      setMariOn(!mariOn)
    }
  } 
  return (
    <div className='EducationMainPage' id="Education">
      <h1 className='titleEducationMain'>Talleres de Educación Ambiental</h1>
      <div className="IconsAndNames">
        <div className="birdSection" onClick={(e)=>{ handleSectionClicked(e)}}>
          <img src={bird} alt="" className="bird Icon" />
          <h1 className='iconTitle'>Aves</h1>
        </div>
        {birdOn&&<p className="miniInfo">{miniInfo.aves}</p>}
        <div className="humeSection" onClick={(e)=>{ handleSectionClicked(e)}}>
          <h1 className='iconTitle'>Humedales</h1>
          <img src={humedal} alt="" className="humedal Icon" />
        </div>
        {humeOn&&<p className="miniInfo">{miniInfo.humedales}</p>}
        <div className="ecoSection" onClick={(e)=>{ handleSectionClicked(e)}}>
          <img src={ecologia} alt="" className="ecologia Icon" />
          <h1 className='iconTitle' >Reciclaje</h1>
        </div>
        {ecoOn&&<p className="miniInfo">{miniInfo.ecologia}</p>}
        <div className="mariSection" onClick={(e)=>{ handleSectionClicked(e)}}>
          <h1 className='iconTitle'>Mariposas</h1>
          <img src={mariposa} alt="" className="mariposa Icon" />
        </div>
        {mariOn&&<p className="miniInfo">{miniInfo.mariposas}</p>}
      </div>
      <Link to={"/Education"} className="more">Ver más</Link>
    </div>
  )
}

export default EducationMainPage