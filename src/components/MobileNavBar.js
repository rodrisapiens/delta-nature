import React, { useState } from 'react'
import "../styles/mobileNavBar.css"
import { Link, useNavigate } from "react-router-dom";
import {ReactComponent as Arrow} from "./../images/arrowHead.svg"
function MobileNavBar({ setNavOn, navOn }) {
  const [page, setPage] = useState("/")
  return (
    <div className='MobileNavBoard'>
      <ul className="MobileNavBar">
        <Link to={"/"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Home <Arrow className='arrowHead'/></Link>
        <Link to={"/Tours"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Tours <Arrow className='arrowHead'/></Link>
        <Link to={"/AboutUs"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>About Me <Arrow className='arrowHead'/></Link>
        <Link to={"/Education"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Education <Arrow className='arrowHead'/></Link>
        <Link to={"/StartYourJourney"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Start Journey <Arrow className='arrowHead'/></Link>
      </ul>
    </div>
  )
}

export default MobileNavBar