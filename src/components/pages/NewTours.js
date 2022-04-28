import React, { useContext, useState } from 'react'
import { ToursContext } from '../../context';
import "../../styles/newtours.css"
import { bigInfo } from "../../api.js";
import { Link } from 'react-router-dom';
import { ReactComponent as Sign } from "../../images/cartelFlecha.svg";
import MovingBg from '../MovingBg';
import { ReactComponent as CanoeAndGuy } from "../../images/canoeAndGuy.svg";
function NewTours() {
  const { toursPage, setToursPage } = useContext(ToursContext);
  const [count, setCount] = useState(0);
  const MAXDELTA = 5;
  const MAXESTANCIA = 5;
  function handleClick() {
    if (toursPage === "deltaTerra") {
      if (count === MAXDELTA) {
        setCount(0);
      }
      else {
        setCount(count + 1);
      }
    }
    else {
      if (count === MAXESTANCIA) {
        setCount(0);
      }
      else {
        setCount(count + 1);
      }
    }
  }
  function handleDescription() {
    if (toursPage === "deltaTerra") {
      if (count === 0) {
        return bigInfo.puertoTigre;
      }
      if (count === 1) {
        return bigInfo.deltaTerra0;
      }
      if (count === 2) {
        return bigInfo.deltaTerra1;
      }
      if (count === 3) {
        return bigInfo.deltaTerra2;
      }
      if (count === 4) {
        return bigInfo.deltaTerra3;
      }
      if (count === 5) {
        return bigInfo.return;
      }
    }
    else {
      if (count === 0) {
        return bigInfo.puertoTigre;
      }
      if (count === 1) {
        return bigInfo.bonanza0;
      }
      if (count === 2) {
        return bigInfo.bonanza1;
      }
      if (count === 3) {
        return bigInfo.bonanza2;
      }
      if (count === 4) {
        return bigInfo.bonanza3;
      }
      if (count === 5) {
        return bigInfo.return;
      }
    }
  }
  return (
    <div className='newTours'>
      <MovingBg toursPage={toursPage} count={count} bigInfo={bigInfo} />
      <div className="signAndText">
        <h3 className="descriptionTours">
          {handleDescription()}
        </h3>
        <Sign className='wodenSign' onClick={handleClick} />
        <h3 className="nextNewTours" onClick={handleClick}>Siguiente</h3>
      </div>
      <button className='ChangeNewTours' onClick={() => { toursPage === "deltaTerra" ? setToursPage("estancia") : setToursPage("deltaTerra"); setCount(0); }}>{toursPage === "deltaTerra" ? 'Conocé tambien el paseo "Estancia en la isla"' : 'Conocé tambien el paseo "Reserva Delta Terra"'}</button>
      <Link to={"/Contact"} className='newToursBtn' >Reservá tu lugar</Link>
    </div>
  )
}

export default NewTours