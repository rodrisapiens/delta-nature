import React, { useEffect, useRef, useState } from 'react';
import ToursMainPage from './MainSections/ToursMainPage.js';
import EducationMainPage from './MainSections/EducationMainPage.js';
import AboutMainPage from './MainSections/AboutMainPage.js';
import { Link } from "react-router-dom";
import "../../styles/mainPage.css"
function MainPage({ bg, CanoeAndGuy, english }) {
  const positions = useRef([0, 0])//[0]is actual position,[1],prev.
  const direction = useRef("down");
  useEffect(() => {
    const bgConteiner = document.querySelector(".bgConteiner");
    const personAndShovel = document.getElementById("personAndShovel");
    bgConteiner.addEventListener("mousemove", handeMouse)
    window.addEventListener("scroll", HandleScroll);
    setInterval(() => {
      personAndShovel.style.animation = "";
    }, 3000)

  }, [])
  useEffect(() => {//aca trato de dar vuelta al chabon
    const CanoeAndGuyy = document.querySelector(".CanoeAndGuyy");
    CanoeAndGuyy.style.transform = `rotateY(180deg)`
  }, [])
  function handeMouse(e) {
    const bg = document.querySelector(".bg");
    bg.style.transform = `translateX(${((window.innerWidth / 2 - e.pageX)) / 40}px)`

  }
  function HandleScroll() {//hay un bug, y el scrollY al 100% no coincide con el clientHeigth.aca voy a hacer cuentas para arreglarlo
    const mainPage = document.querySelector(".mainPage")
    const personAndShovel = document.getElementById("personAndShovel");
    const canoeAndGuyy = document.querySelector(".CanoeAndGuyy");
    const convertion = (100 / (mainPage.clientHeight));//as a linear function, let's calculate the convertion factor
    const converion1 = 100 / 80;//80 es el maximo que llega position
    const position = ((window.scrollY) * convertion) * converion1//valor de 0 a 100
    positions.current[0] = position;
    if (positions.current[0] - positions.current[1] > 0)//si estoy bajando
    {
      direction.current = "down";
      canoeAndGuyy.style.transform = `rotateY(180deg)translateX(${position}rem)`//rotateY(180deg)
      personAndShovel.style.animation = `row 1s ease-in-out infinite`
    }
    else {//si frene o subo
      if (positions.current[0] - positions.current[1] === 0) {
      }
      else {//si subo
        canoeAndGuyy.style.transform = `rotateY(0deg) translateX(${-position}em)`;
        direction.current = "up";
        personAndShovel.style.animation = `row 1s ease-in-out infinite`

      }

    }
    positions.current[1] = positions.current[0];
    if (position === 0) {
      canoeAndGuyy.style.transform = `rotateY(180deg)`
    }
    log(position);
    animations(position)
  }
  //apearEducation
  function animations(position) {
    const rigthBird = document.querySelector(".rigthBird")
    const centerBirds = document.querySelector(".centerBirds")
    const leftBird = document.querySelector(".leftBird")
    const birdSection = document.querySelector(".birdSection");
    const humeSection = document.querySelector(".humeSection");
    const ecoSection = document.querySelector(".ecoSection");
    const mariSection = document.querySelector(".mariSection");
    const guide = document.querySelector(".guide");
    if (position >= 10) {
      centerBirds.style.transform = `translate(${position / 6}rem,${-position / 6}rem)`
      rigthBird.style.transform = `translate(${-position / 6}rem,${-position / 6}rem)`
      leftBird.style.transform = `translate(${position / 15}rem,${-position / 50}rem)`
    }
    if (position >= 45) {
      birdSection.style.animation = "apearEducation .5s ease-in-out forwards"
    }
    else {
      birdSection.style.animation = ""
    }
    if (position >= 50) {
      humeSection.style.animation = "apearEducation .5s ease-in-out forwards"
    }
    else humeSection.style.animation = ""
    if (position >= 55) {
      ecoSection.style.animation = "apearEducation .5s ease-in-out forwards"
    }
    else ecoSection.style.animation = ""
    if (position >= 60) {
      mariSection.style.animation = "apearEducation .5s ease-in-out forwards"
    }
    else mariSection.style.animation = ""
    if (position >= 70) {
      guide.style.transform = `translateY(${-position / 15}rem)`
    }
  }
  function log(position) {
    console.log(position)
  }
  return (
    <div className='mainPage'>
      <div className="bgConteiner">
        <div className="mainText">
          <h1 className="meet">{english ? "Meet with nature" : "Descubrí la naturaleza"}</h1>
          <h4 className='subTitle'>Conocer para amar y amar para preservar</h4>
        </div>
        <CanoeAndGuy className='CanoeAndGuyy' />
        <img src={bg} alt={"bg"} className='bg'></img>
      </div>
      <ToursMainPage />
      <EducationMainPage />
      <AboutMainPage />
    </div>

  );
}

export default MainPage