import React,{useEffect,useContext} from 'react'
import "../../styles/tours.css";
import { Link } from 'react-router-dom';
import { bigInfo } from "../../api.js";
import { ToursContext } from '../../context';
import bgImage from "../../images/atardecerMisiones.jpg"
function Tours() {
  const {toursPage,setToursPage}=useContext(ToursContext);
  useEffect(() => {
    const deltaTerra= document.querySelector(".deltaTerraPage");
    const estancia= document.querySelector(".bonanzaPage");
    if(toursPage==="deltaTerra")
    {
      deltaTerra.scrollIntoView({behavior:'smooth'});
    }
    else
    {
      estancia.scrollIntoView({behavior:'smooth'});
    }
  
  }, [])
  function HandleChangeBg()
  {
    const bonanzaPage=document.querySelector(".bonanzaPage");
    bonanzaPage.style.backgroundImage=`url(${bgImage})`;
    console.log("hols")
  }
  return (
    <div className='toursPage'>
      <div className="deltaTerraPage">
        <h1 className="deltaTerraPageTitle">Reserva Delta Terra</h1>
        <div className="BigInfoDeltaTerra">
          <p className="paraDeltaTerra">
            {bigInfo.deltaTerra0}
          </p>
          <p className="paraDeltaTerra">
            {bigInfo.deltaTerra1}
          </p>
          <p className="paraDeltaTerra">
            {bigInfo.deltaTerra2}
          </p>
          <p className="paraDeltaTerra">
            {bigInfo.deltaTerra3}
          </p>
        </div>
        <Link to={"/Contact"} className='more contrastButton' >Reserva tu lugar</Link>
      </div>
      <div className="bonanzaPage" id="estancia">
        <h1 className="deltaTerraPageTitle">Dia en estancia</h1>
        <div className="BigInfoDeltaTerra">
          <p className="paraDeltaTerra">
            {bigInfo.bonanza0}
          </p>
          <p className="paraDeltaTerra">
            {bigInfo.bonanza1}
          </p>
          <p className="paraDeltaTerra">
            {bigInfo.bonanza2}
          </p>
        </div>
        <Link to={"/Contact"} className='more contrastButton' >Reserva tu lugar</Link>
        <button onClick={HandleChangeBg}>Change bg</button>
      </div>
    </div >
  )
}

export default Tours