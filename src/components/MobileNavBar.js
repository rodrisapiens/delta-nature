import React, { useState } from 'react'
import "../styles/mobileNavBar.css"
import { Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {ReactComponent as Arrow} from "./../images/arrowHead.svg"
function MobileNavBar({ setNavOn, navOn}) {
  const [page, setPage] = useState("/")
  return (
    <div className={navOn?'MobileNavBoard':'MobileNavBoardOff'}>
      <ul className={navOn?"MobileNavBar":"MobileNavBarOff"}>
        <Link to={"/"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Home <Arrow className='arrowHead'/></Link>
        <Link to={"/Tours"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Paseos<Arrow className='arrowHead'/></Link>
        <Link to={"/AboutUs"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Sobre mí<Arrow className='arrowHead'/></Link>
        <HashLink to={"/#Education"} smooth className={'navBtn'} onClick={() => setNavOn(!navOn)}>Educación<Arrow className='arrowHead'/></HashLink>
        <Link to={"/Contact"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Hablemos!<Arrow className='arrowHead'/></Link>
{/*         <Link to={"/StartYourJourney"} className={'navBtn'} onClick={() => setNavOn(!navOn)}>Start Journey <Arrow className='arrowHead'/></Link>
 */}      </ul>
    </div>
  )
}

export default MobileNavBar