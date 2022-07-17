import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import styled from "styled-components"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wj4stvk', 'template_qgq7v6k', form.current, 'pgb-qYYT1JG35pzh-')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact' id='contact'>
    <h1 class="contact-title ">Contact Me</h1>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className='container-fluid form'>
      <input type="text" name="user_name" placeholder='Your Name'/>
      <input type="email" name="user_email" placeholder='EMail'/>
      <textarea name="message" placeholder='Your Message here..'/>
      <button type="submit" value="Send">Send</button>
    </form>
      </div>
    </div>
  )
}

export default Contact
