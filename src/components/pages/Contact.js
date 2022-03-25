import React from 'react'
import "../../styles/contact.css"
import {ReactComponent as Birds} from "../../images/contactBirds.svg"
function Contact() {
  return (
    <div className='contactPage'>
        <Birds className='contactBirds'/>
        <div className="contactConteiner">
        <h1 className="enviame">Enviame un mensaje</h1>
        <div className="contactBox">

        </div>
        </div>
    </div>
  )
}

export default Contact