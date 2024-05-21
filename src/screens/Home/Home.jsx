import React from 'react';
import logo from "../../../src/assets/Logo.png";
import style from "../../styles-components/home.module.css";
import ContactUs from '../../components/email/confirmEmail.jsx';

const Home = () => {
  return (
    <div className={style.container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
        <h1>Bienvenido</h1>
        <img src={logo} alt="Logo" style={{ width: '60px' }} />
      </div>

      <p>
        Esta es una aplicación capaz de encontrar turnos y una variedad de servicios para satisfacer tus necesidades.
      </p>
      <p>
        Explora nuestra selección de servicios y reserva tus turnos de manera fácil y conveniente.
      </p>
      
      <div className={style.email}>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
