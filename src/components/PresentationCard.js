import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ToursContext } from '../context.js';
import { HashLink } from 'react-router-hash-link';
import cardContent from "../api.js";
function PresentationCard({ card }) {
    const {toursPage,setToursPage}=useContext(ToursContext);
    function handleClickEstancia()
    {
        setToursPage("estancia")
    }
    function handleClickDeltaTerra()
    {
        setToursPage("deltaTerra")
    }
    return (
        <>{card === 0 ?
            <Link to={"/Tours"} className={card === 0 ? 'cardConteiner left' : 'rigth cardConteiner'} onClick={handleClickDeltaTerra}>
                <div className='PresentationCard'>
                    <img src={card === 0 ? cardContent[0].image : cardContent[1].image} alt="cardPhoto" className="cardPhoto" />
                    <div className="cardTextConteiner">
                        <h2 className="cardTitle">{card === 0 ? cardContent[0].name : cardContent[1].name}</h2>
                        <p className="cardText">{card === 0 ? cardContent[0].text : cardContent[1].text}</p>
                    </div>
                </div>
            </Link> :
            <Link to={{pathname:"/Tours",hash:"estancia"}}  className={card === 0 ? 'cardConteiner left' : 'rigth cardConteiner'} onClick={handleClickEstancia}>
                <div className='PresentationCard'>
                    <img src={card === 0 ? cardContent[0].image : cardContent[1].image} alt="cardPhoto" className="cardPhoto" />
                    <div className="cardTextConteiner">
                        <h2 className="cardTitle">{card === 0 ? cardContent[0].name : cardContent[1].name}</h2>
                        <p className="cardText">{card === 0 ? cardContent[0].text : cardContent[1].text}</p>
                    </div>
                </div>
            </Link>
        }
        </>

    )
}

export default PresentationCard