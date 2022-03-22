import React from 'react'
import "../styles/navBarIcons.css"
import {ReactComponent as Trunks} from "../images/trunksNav.svg";

function NavBarIcons({navOn,setNavOn,setFirst}) {
    return (
        <button className='NavIcon' onClick={()=>{setNavOn(!navOn);setFirst(false)}}>
        <Trunks onClick={()=>{setNavOn(!navOn)}} className={navOn?'crossTrunks':'trunks'}/>
        </button>
    )
}

export default NavBarIcons