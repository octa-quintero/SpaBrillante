import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Style from '../../styles-components/confirmEmail.module.css'

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tenvfun', 'template_jdvigrc', form.current, {
        publicKey: 'PEwU5kv1Ebb7W8_Ja',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="to_name" />
      <label>E-mail</label>
      <input type="email" name="e_mail" />
      <input type="submit" value="Send" />
    </form>
  );
};