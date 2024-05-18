// Email.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Email = ({ name, email }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tenvfun', 'template_jdvigrc', form.current, {
        publicKey: 'PEwU5kv1Ebb7W8_Ja',
        user_name: name,
        user_email: email,
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
      <label>Name</label>
      <input type="text" name="user_name" defaultValue={name} />
      <label>Email</label>
      <input type="email" name="user_email" defaultValue={email} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;
