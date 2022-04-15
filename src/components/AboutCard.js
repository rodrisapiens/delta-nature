import React, { useState,useEffect } from 'react'
import "../styles/aboutUs.css"
import { ReactComponent as Clip } from "../images/Clip.svg"
import { ReactComponent as Rectangle } from "../images/Rectangle.svg"
import { ReactComponent as PaperAndClip } from "../images/ClipYHojaBlanco.svg"

function AboutCard({ type, text, img }) {
    const [on, setOn] = useState(false);
    useEffect(() => {
        const card=document.querySelector(`.${type}`);
        if (on) {
            card.style.animation="AboutCardAppear .5s ease forwards"
        }
        else{
            card.style.animation="AboutCardDesappear .5s ease forwards"
        }
    }, [on])
    
    const handleClick = (e) => {
        if (on) {
            setOn(false)
        }
        else{
            setOn(true)
        }
    }
    return (
        <div className={`aboutCard ${type}`} onClick={handleClick}>
            <div className={`infoAboutConteiner`} onClick={handleClick}>
                <Rectangle className='rectangle' onClick={handleClick}/>
                <img src={img} alt="" className="aboutImage" onClick={handleClick}/>
                <Clip className='clip' onClick={handleClick}/>
                <p className="AboutText" onClick={handleClick}>{text}</p>
            </div>
        </div>
    )
}

export default AboutCard