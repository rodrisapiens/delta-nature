import React,{useState,useEffect} from 'react'
import "../styles/navBar.css"
import { Link} from "react-router-dom";
import {ReactComponent as Arrow} from "./../images/arrowHead.svg"
import { HashLink } from 'react-router-hash-link';
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
          <Link to={"/Tours"} className={page==="Tours"?'navBtnD On':'navBtnD'} onClick={() => setPage("Tours")}>Paseos</Link>
          <Link to={"/AboutUs"} className={page==="AboutUS"?'navBtnD On':'navBtnD'} onClick={() => setPage("AboutUS")}>Sobre mi</Link>
          <HashLink to={"/#Education"} smooth className={page==="Education"?'navBtnD On':'navBtnD'} onClick={() => setPage("Education")}>Educación</HashLink>
{/*           <Link to={"/Contact"} className={page==="Contact"?'navBtnD On':'navBtnD'} onClick={() => setPage("Contact")}>Contacto</Link>
 */}          <Link to={"/Contact"} className={'navBtnS'} onClick={() => setPage("Contact")}><LongArrow className='longArrow'/>Hablemos!</Link>
{/*           <Link to={"/StartYourJourney"} className={'navBtnS'} onClick={() => setPage("StartYourJourney")}><LongArrow className='longArrow'/>Start Journey</Link>
 */}        </ul>
      </div>
    )
  }

export default NavBar