import React from 'react'
import "../../styles/contact.css"
import { ReactComponent as Birds } from "../../images/contactBirds.svg"
function Contact() {
    let goodToGo=true;
    function handleSend()
    {
       const name= document.getElementById("name").value.trim();
       const email= document.getElementById("email").value.trim();
       const phone= document.getElementById("phone").value.trim();
       const message= document.getElementById("message").value.trim();
       const nameElement= document.getElementById("name");
       const emailElement= document.getElementById("email")
       const phoneelement= document.getElementById("phone")
       const messageElement= document.getElementById("message")
       nameElement.classList.remove("error","good")
       emailElement.classList.remove("error","good")
       phoneelement.classList.remove("error","good")
       messageElement.classList.remove("error","good")
        if(name==="")
        {
            nameElement.classList.add("error");
            goodToGo=false;
        }
        else nameElement.classList.add("good")
        if(email==="")
        {
            emailElement.classList.add("error")
            goodToGo=false;
        }
        else emailElement.classList.add("good")
        if(phone==="")
        {
            phoneelement.classList.add("error")
            goodToGo=false;
        }
        else phoneelement.classList.add("good")
        if(message==="")
        {
            messageElement.classList.add("error")
            goodToGo=false;
        }
        else messageElement.classList.add("good")
        console.log(goodToGo)
        if(goodToGo)
        {
            sendEmail(email,name,phone,message)
        }
    }
    function sendEmail(email,name,phone,message)
    {
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "deltaandnature@gmail.com",
            Password : "686E15DAAA9997969268B30E8A046E030061", 
            To : 'rodrigoniveyroreguero@gmail.com',
            From : `deltaandnature@gmail.com`,
            Subject : "nuevo mensaje de delta y nature",
            Body : `nombre: ${name}<br>
                    email: ${email}<br>
                    telefono: ${phone}<br>
                    mensaje: ${message}`
        }).then(
          message => alert(message)
        );
    }
    return (
        <div className='contactPage'>
            <Birds className='contactBirds' />
            <div className="contactConteiner">
                <h1 className="enviame">Enviame un mensaje</h1>
                <div className="contactBox">
                    <div className="fill">
                        <label htmlFor="name" className='myPlaceHolder'>Nombre</label>
                        <input id="name" type="text" className="contactFill" />
                        <label htmlFor="email" className='myPlaceHolder'>Email</label>
                        <input id="email" type="email" className="contactFill" />
                        <label htmlFor="phone" className='myPlaceHolder'>Telefono</label>
                        <input id="phone" type="text" className="contactFill" />
                    </div>
                    <label htmlFor="message" className='myPlaceLastHolder'>Tú Mensaje</label>
                    <textarea id="message" className='contactMessage'/>
                </div>
                <button className="more big" onClick={handleSend}>ENVIAR</button>
            </div>
        </div>
    )
}

export default Contact