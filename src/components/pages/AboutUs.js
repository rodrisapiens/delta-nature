import React, { useEffect, useState } from 'react'
import AboutCard from '../AboutCard';
import "../../styles/aboutUs.css";
import { aboutMe } from "../../api";
import { ReactComponent as PaperAndClip } from "../../images/ClipYHojaBlanco.svg"
function AboutUs() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className='aboutUs'>
      <AboutCard type={"white"} text={aboutMe.p0} img={aboutMe.img0}/>
      <AboutCard type={"gray"} text={aboutMe.p1} img={aboutMe.img1}/>
      <AboutCard type={"beige"} text={aboutMe.p2} img={aboutMe.img2}/>
      <AboutCard type={"darkGreen"} text={aboutMe.p3} img={aboutMe.img3}/>
      <AboutCard type={"ligthGreen"} text={aboutMe.p4} img={aboutMe.img4}/>
    </div>
  )
}

export default AboutUs