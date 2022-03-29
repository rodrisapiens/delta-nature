import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import cardContent from "../api.js";
function PresentationCard({card}) {
    return (
        <div className={card===0?'cardConteiner left': 'rigth cardConteiner'}>
            <div className='PresentationCard'>
            <img src={card===0?cardContent[0].image:cardContent[1].image} alt="cardPhoto" className="cardPhoto" />
            <div className="cardTextConteiner">
                <h2 className="cardTitle">{card===0?cardContent[0].name:cardContent[1].name}</h2>
                <p className="cardText">{card===0?cardContent[0].text:cardContent[1].text}</p>
            </div>
            </div>
        </div>

    )
}

export default PresentationCard