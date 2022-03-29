import React,{useEffect} from 'react'
import "../../styles/aboutUs.css";
import { aboutMe } from "../../api";
function AboutUs() {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  
  return (
    <div className='aboutUs'>
      <div className="firstAboutPage">
        <div className="presentation">
          <p className="presentationText">
            {aboutMe.p0}
          </p>
          <div className="frontGuideConteiner">
            <img src={aboutMe.img0} alt="" className="frontGuide" />
          </div>
        </div>
        <div className="reserva">
          <div className="cartelReservaConteiner">
            <img src={aboutMe.img1} alt="" className="cartelReserva" />
          </div>
          <p className="presentationText">
            {aboutMe.p1}
          </p>
        </div>
      </div>
      <div className="secondAboutPage">
        <div className="coa">
          <div className="avistajeConteiner">
            <img src={aboutMe.img2} alt="" className="avistaje" />
          </div>
          <p className="presentationText">
            {aboutMe.p2}
          </p>
        </div>
        <div className="bioCorredor">
          <p className="presentationText">
            {aboutMe.p3}
          </p>
          <div className="cartelMariConteiner">
            <img src={aboutMe.img3} alt="" className="cartelMari" />
          </div>
        </div>
        <div className="voluntariado">
          <div className="atardecerConteiner">
            <img src={aboutMe.img4} alt="" className="atardecer" />
          </div>
          <p className="presentationText">
            {aboutMe.p4}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs