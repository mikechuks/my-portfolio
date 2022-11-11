import React, {useRef}from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css";
import Menu from '../../menu/Menu';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r76d2zh', 'template_ialvtqg', form.current, 'rJ9cG9fsnLoAI-IfR')
        .then((result) => {
            console.log(result.text);
            alert("Your Message Was Successfully Sent")
        }, (error) => {
            console.log(error.text);
            alert("Error Occur While Sending Message")
        });
    };
  return (
    <div>
        <Menu/>
        <div className='contactContainer'>
    <form ref={form} onSubmit={sendEmail} >
    <label>Name</label>
    <br/>
    <input type="text" name="from_name" className='contactName'/>
    <br/>
    <br/>
    <label>Email</label>
    <br/>
    <input type="email" name="reply_to" className='contactName' />
    <br/>
    <br/>
    <label>Message</label>
    <br/>
    <textarea name="message" className='contactMessage'/>
    <br/>
    <br/>
    <input type="submit" value="Send" className='contactButton'/>
  </form>
  </div>
  </div>
  )
}

export default Contact