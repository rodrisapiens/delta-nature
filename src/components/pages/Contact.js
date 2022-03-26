import React from 'react'
import "../../styles/contact.css"
import { ReactComponent as Birds } from "../../images/contactBirds.svg"
function Contact() {
    return (
        <div className='contactPage'>
            <Birds className='contactBirds' />
            <div className="contactConteiner">
                <h1 className="enviame">Enviame un mensaje</h1>
                <div className="contactBox">
                    <div className="fill">
                        <input type="text" className="contactFill" />
                        <input type="email" className="contactFill" />
                        <input type="text" className="contactFill" />
                    </div>
                    <textarea className='contactMessage'/>
                </div>
                <button className="more big">SEND</button>
            </div>
        </div>
    )
}

export default Contact