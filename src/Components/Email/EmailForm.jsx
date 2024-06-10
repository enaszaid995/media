import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useInput from './UseInput';
import './EmailForm.css'
const EmailForm = () => {
  const form = useRef();
  const {
    enteredValue:enterdName ,
    isTouch:touchName,
    EnteredValueIsValid:EnteredNameIsValid,
    getValueInput:getName,
    getIsTouch:getNameTouch,
    reset:resetName
  }= useInput(value=>value.trim().length !== 0);


  const {
    enteredValue:enteredMessage ,
    isTouch:touchMessage,
    EnteredValueIsValid:EnteredMessageIsValid,
    getValueInput:getMessage,
    getIsTouch:getMessageTouch,
    reset:resetMessage
  }= useInput(value=>value.trim().length !== 0);


  const {
    enteredValue:enteredEmail ,
    isTouch:touchEmail,
    EnteredValueIsValid:EnteredEmailIsValid,
    getValueInput:getEmail,
    getIsTouch:getemailTouch,
    reset:resetEmail
  }= useInput(value=>value.includes('@'));

  let formIsValid=false;
  
  const nameClasses = EnteredNameIsValid || !touchName? 'form-control' :'form-control invalid';
  const messageClasses = EnteredMessageIsValid || !touchMessage ? 'form-control' :'form-control invalid';
  const EmailClasses = EnteredEmailIsValid || !touchEmail ? 'form-control' :'form-control invalid';

  if(EnteredNameIsValid && enteredMessage.length > 0 && EnteredEmailIsValid){
    formIsValid=true;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if(!formIsValid){
        return;
      }
    emailjs.sendForm('service_kuyujdp', 'template_f614udr', form.current, {
        publicKey: 'DEEO8_5Y3Vw7IbP1H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert('Send Message Success');
      resetName();
      resetMessage();
      resetEmail();
      formIsValid=false;
  };
  return (
    <form ref={form} className='form-control' onSubmit={sendEmail}>
       
        
        <div className={nameClasses}>
            <label htmlFor='"user_name"'>Name</label>
            <input type="text" id="user_name" name="user_name"  onChange={getName} onBlur={getNameTouch} value={enterdName}/>
            {<p hidden={EnteredNameIsValid || !touchName} className='error-msg'>Please Enter Valid Name</p>}
        </div>
        <div className={EmailClasses}>
                    
            <label htmlFor="user_email" >Email</label>
            <input type="email" id= "user_email"  name="user_email"  onChange={getEmail}  onBlur={getemailTouch} value={enteredEmail} />
            <p hidden={EnteredEmailIsValid || !touchEmail} className='error-msg'>Please Enter Valid Email</p>
        </div>
        <div className={messageClasses}>
                    
            <label htmlFor="message">Message</label>
            <textarea  id="message" name="message"   value={enteredMessage}  onChange={getMessage} onBlur={getMessageTouch} />
            <p hidden={EnteredMessageIsValid || !touchMessage} className='error-msg'>Please Enter Your Message</p>
        </div>
        <div className='form-actions'>
          <input type="submit" value="Submit" disabled={!formIsValid}/>
        </div>
  </form>
  );
};
export default EmailForm;