import React from 'react'
import "../styles/newtours.css"
function MovingBg({ toursPage, bigInfo, count }) {
    function handleSource() {
        if (toursPage === "deltaTerra") {
            if (count === 0) {
                return bigInfo.imgPuertoTigre;
            }
            if (count === 1) {
                return bigInfo.imgDelta0;
            }
            if (count === 2) {
                return bigInfo.imgDelta1;
            }
            if (count === 3) {
                return bigInfo.imgDelta2;
            }
            if (count === 4) {
                return bigInfo.imgDelta3;
            }
            if (count === 5) {
                return bigInfo.imgReturn;
            }
        }
        else {
            if (count === 0) {
                return bigInfo.imgPuertoTigre;
            }
            if (count === 1) {
                return bigInfo.imgBonanza0;
            }
            if (count === 2) {
                return bigInfo.imgBonanza1;
            }
            if (count === 3) {
                return bigInfo.imgBonanza2;
            }
            if (count === 4) {
                return bigInfo.imgBonanza3;
            }
            if (count === 5) {
                return bigInfo.imgReturn;
            }
        }
    }
    return (

        <div className='movingBg'>
            <img src={handleSource()} alt="bg" className="bgTours" />
        </div>

    )
}

export default MovingBg