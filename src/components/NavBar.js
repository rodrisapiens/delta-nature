import React,{useState,useEffect} from 'react'
import "../styles/navBar.css"
import { Link} from "react-router-dom";
import {ReactComponent as Arrow} from "./../images/arrowHead.svg"
import {ReactComponent as LongArrow} from "./../images/longArrow.svg"

function NavBar() {
    const [page, setPage] = useState("Home")
    useEffect(() => {
     const navBtn=document.querySelectorAll(".navBtnD");
     if(navBtn.textContent===page){
         console.log(page)
     }
    }, [page])
    
    return (
      <div className='navBarConteiner'>
        <ul className="navBarD">
          <Link to={"/"} className={page==="Home"?'navBtnD On':'navBtnD'} onClick={() => {setPage("Home");}}>Home</Link>
          <Link to={"/Tours"} className={page==="Tours"?'navBtnD On':'navBtnD'} onClick={() => setPage("Tours")}>Tours</Link>
          <Link to={"/AboutUs"} className={page==="AboutUS"?'navBtnD On':'navBtnD'} onClick={() => setPage("AboutUS")}>About Me <Arrow className='arrowHeadD'/></Link>
          <Link to={"/Education"} className={page==="Education"?'navBtnD On':'navBtnD'} onClick={() => setPage("Education")}>Education</Link>
          <Link to={"/StartYourJourney"} className={'navBtnS'} onClick={() => setPage("StartYourJourney")}><LongArrow className='longArrow'/>Start Journey</Link>
        </ul>
      </div>
    )
  }

export default NavBar