import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Contact from './components/pages/Contact';
import Tours from './components/pages/Tours';
import AboutUs from './components/pages/AboutUs';
import Education from './components/pages/Education';
import StartYourJourney from './components/pages/StartYourJourney';
import { ReactComponent as CanoeAndGuy } from "./images/canoeAndGuy.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import logo from "./images/logo(1).png";
import NavBarIcons from "./components/NavBarIcons"
import MobileNavBar from "./components/MobileNavBar"
import { ToursContext } from './context';
import bg from "./images/forestAndWater-1.webp"
/* import Header from './Header';
 */import './styles/app.css';
import NavBar from './components/NavBar';
function App() {
  const [english, setEnglish] = useState(false);
  const [navOn, setNavOn] = useState(false)
  const[first,setFirst]=useState(true);
  const [toursPage,setToursPage]=useState("deltaTerra");
  return (
    <ToursContext.Provider value={{toursPage,setToursPage}}>
    <BrowserRouter>
      <div className='app'>
        <div className="logoAndName">
          <Logo className="logo"/>
          <h1 className="name">Delta&Nature</h1>
        </div>
        {window.innerWidth < 600 ? <NavBarIcons setNavOn={setNavOn} navOn={navOn}setFirst={setFirst}/> : <NavBar/>}
        {first?null:<MobileNavBar setNavOn={setNavOn} navOn={navOn}/>}
        <Routes>
          <Route exact path="/" element={<MainPage CanoeAndGuy={CanoeAndGuy} bg={bg} english={english} />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/StartYourJourney" element={<StartYourJourney />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ToursContext.Provider>
  );
}

export default App;
