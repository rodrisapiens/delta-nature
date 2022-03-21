import React, { useEffect, useRef, useState } from 'react';
import "../../styles/mainPage.css"
function MainPage({bg,CanoeAndGuy,english}) {
    const positions = useRef([0,0])//[0]is actual position,[1],prev.
    const direction = useRef("down");
    useEffect(() => {
      const bgConteiner = document.querySelector(".bgConteiner");
      const personAndShovel = document.getElementById("personAndShovel");
      bgConteiner.addEventListener("mousemove", handeMouse)
      window.addEventListener("scroll", HandleScroll);
      setInterval(()=>{personAndShovel.style.animation = "";
    },3000)
  
    }, [])
    useEffect(() => {//aca trato de dar vuelta al chabon
      const CanoeAndGuyy = document.querySelector(".CanoeAndGuyy");
      CanoeAndGuyy.style.transform = `rotateY(180deg)`
    }, [])
    function handeMouse(e) {
      const bg = document.querySelector(".bg");
      bg.style.transform = `translateX(${((window.innerWidth / 2 - e.pageX)) / 40}px)`
  
    }
    function HandleScroll() {
      const personAndShovel = document.getElementById("personAndShovel");
      const canoeAndGuyy = document.querySelector(".CanoeAndGuyy");
      const convertion = (100 / window.innerHeight);//as a linear function, let's calculate the convertion factor
      const position = Math.floor((window.scrollY) * convertion)//valor de 0 a 100
      positions.current[0] = position;
      if (positions.current[0] - positions.current[1] > 0)//si estoy bajando
      {
        direction.current = "down";
        canoeAndGuyy.style.transform = `rotateY(180deg)translateX(${position / 4}em)`//rotateY(180deg)
        personAndShovel.style.animation = `row 1s ease-in-out infinite`
      }
      else {//si frene o subo
        if (positions.current[0] - positions.current[1] === 0) {
        }
        else {//si subo
          canoeAndGuyy.style.transform = `rotateY(0deg) translateX(${-position / 4}em)`;
          direction.current = "up";
          personAndShovel.style.animation = `row 1s ease-in-out infinite`
  
        }
  
      }
      positions.current[1] = positions.current[0];
      if(position===0)
    {
      canoeAndGuyy.style.transform = `rotateY(180deg)`
    }
    log(position);
    }
    function log(position)
    {
      console.log(position)
    }
    return (
      <div className="app">
        <div className="bgConteiner">
          <h1 className="meet">{english?"Meet with nature":"Conoce la naturaleza"}</h1>
          <CanoeAndGuy className='CanoeAndGuyy' />
          <img src={bg} alt={"bg"} className='bg'></img>
        </div>
      </div>
    );
  }

export default MainPage