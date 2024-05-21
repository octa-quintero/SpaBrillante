import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '../.././styles-components/confirmEmail.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_txhbyrb', 'changetemplate', form.current, {
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
    <form className={style.container} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className={style.input} type="text" name="user_name" />
      <label>Email</label>
      <input className={style.input} type="email" name="user_email" />
      <label>Message</label>
      <textarea className={style.textarea} name="message" />
      <div className={style.contentConfirm}>
      <input className={style.confirm} type="submit" value="Send"/>
      </div>
    </form>
  );
};

export default ContactUs;