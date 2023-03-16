import React from 'react';
import s from './Mailer.module.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import cv from '../Navbar/CV.pdf'

export const Mailer = () => {

  const [error, setError] = useState('');
  const [state, setState] = useState({
    name: '',
    email: '',
    text: ''
  });

  const nameHandler = (e) => {
    let nameValue = e.target.value;
    if(nameValue.length > 4){
      setError('');
    }else{
    setError('Por favor el nombre debe contener 4 caracteres.')
    }
    setState({...state, name: nameValue})
  }
  const mailHandler = (e) => {
    let mailValue = e.target.value;
    setError('')
    setState({...state, email: mailValue})
  }
  const textHandler = (e) => {
    let textValue = e.target.value;
    if(textValue.length > 4){
      setError('');
    }else{
    setError('Por favor el mensaje debe contener 4 caracteres.')
    }
    setState({...state, text: textValue})
  }

  const sendEmail = (event) => {
    event.preventDefault();
    if(state.email == '' || state.name == '' || state.text == ''){
      setError('Por favor llena todos los campos.')
    }
    if(state.email && state.name && state.text){
      emailjs.sendForm('service_hwqxig8','template_5za3keb',event.target,'HF9sm4Ge20xZ_RX1D')
      .then(response => alert('Mensaje enviado correctamente'))
      .catch(error => alert('El mensaje no pudo ser enviado, por favor vuelve a intentarlo'))
      setState({
        name: '',
        email: '',
        text: ''
      })
    }
  }

  return (
    <div className={s.containerContact}>
      <h1 className='title-form'>Contáctame</h1>
      <form className={s.formContainer} onSubmit={sendEmail}>
        <label>Nombre:</label>
        <input onChange={nameHandler} value={state.name} type="text" name='user_name' />

        <label>Email:</label>
        <input onChange={mailHandler} value={state.email} type="email" name='user_email' />

        <label>Mensaje:</label>
        <textarea onChange={textHandler} value={state.text} name="user_message" id="" cols="30" rows="10"></textarea>
        {console.log(state)}
        {error && <h4 className={s.error}>{error}</h4>}
        {!error && <button type='submit'>Enviar</button>}
      </form>
      <div className={s.descargaContainer}>
        <a className={s.linkCV} target='_blank' href={cv}>Descargar CV</a>
      </div>
      <div className={s.linksContainer}>
        <div className={s.iconContainer}>
          <a target='_blank' href='https://www.linkedin.com/in/axel-escobar-schneider/'><Icon icon="pajamas:linkedin" width="40" /></a>
        </div>
        <div className={s.iconContainer}>
          <a target='_blank' href='https://github.com/axelescobarr'><Icon icon="fa:github-square" width="40" /></a>
        </div>
        <div className={s.iconContainer}>
          <a target='_blank' href='https://wa.me/540344515574306'><Icon icon="mingcute:whatsapp-fill" width="40" /></a>
        </div>
      </div>
      
    </div>
  )
}