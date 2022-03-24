import React from 'react'
import "../../../styles/ToursMain.css"
import PresentationCard from "../../PresentationCard.js"
import rigthBird from "../../../images/rigthBird.png";
import leftBird from "../../../images/leftBird.png";
import centerBirds from "../../../images/centerBirds.png";
import {Link} from "react-router-dom"
function ToursMainPage() {
  return (
    <div className='ToursMainPage'>
      <div className="whereToAdventure">
        <h1 className="whereTo">Where to</h1>
        <h1 className="Adventure?">Adventure?</h1>
      </div>
      <div className="birds">
        <div className="rigthBirdConteiner">
          <img src={rigthBird} alt="" className="rigthBird" />
        </div>
        <div className="centerBirdsConteiner">
          <img src={centerBirds} alt="" className="centerBirds" />
        </div>
        <div className="leftBirdConteiner">
          <img src={leftBird} alt="" className="leftBird" />
        </div>
      </div>
      <div className="cards">
        <PresentationCard card={0} />
        <PresentationCard card={1} />
      </div>
      <Link to={"/Tours"} className="moreE">See More!</Link>
    </div>
  )
}

export default ToursMainPage