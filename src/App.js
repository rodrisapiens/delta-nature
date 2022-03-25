import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Tours from './components/pages/Tours';
import AboutUs from './components/pages/AboutUs';
import Education from './components/pages/Education';
import StartYourJourney from './components/pages/StartYourJourney';
import { ReactComponent as CanoeAndGuy } from "./images/canoeAndGuy.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import logo from "./images/logo(1).png";
import NavBarIcons from "./components/NavBarIcons"
import MobileNavBar from "./components/MobileNavBar"
import bg from "./images/forestAndWater.png"
/* import Header from './Header';
 */import './styles/app.css';
import NavBar from './components/NavBar';
function App() {
  const [english, setEnglish] = useState(false);
  const [navOn, setNavOn] = useState(false)
  const[first,setFirst]=useState(true);
  return (
    <BrowserRouter>
      <div className='app'>
        <div className="logoAndName">
          <Logo className="logo"/>
          <h1 className="name">Delta&Nature</h1>
        </div>
        {window.innerWidth < 600 ? <NavBarIcons setNavOn={setNavOn} navOn={navOn}setFirst={setFirst}/> : <NavBar/>}
        {first?null:<MobileNavBar setNavOn={setNavOn}navOn={navOn}/>}
        <Routes>
          <Route path="/" element={<MainPage CanoeAndGuy={CanoeAndGuy} bg={bg} english={english} />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/StartYourJourney" element={<StartYourJourney />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
