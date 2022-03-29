import React,{useEffect} from 'react'
import deltaTerra from "../../images/deltaTerra.png";
import "../../styles/tours.css";
import { Link } from 'react-router-dom';
import { bigInfo } from "../../api.js";
function Tours() {
  useEffect(() => {
    
  window.scroll(0,0);
    
  }, [])
  
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
        <Link to={"/Contact"} className='more contrastButton'>Reserva tu lugar</Link>
      </div>
      <div className="bonanzaPage">
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
        <Link to={"/Contact"} className='more contrastButton'>Reserva tu lugar</Link>
      </div>
    </div >
  )
}

export default Tours