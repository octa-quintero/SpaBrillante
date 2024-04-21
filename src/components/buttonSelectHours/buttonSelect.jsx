import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from "../../styles-components/buttonSelect.module.css";

const Button = ({ to, text, className }) => {
  const handleClick = () => {
    const buttons = document.querySelectorAll(`.${Style.button}`);
    buttons.forEach(button => {
      button.classList.remove(Style.active);
    });
    event.target.classList.add(Style.active);
  };

  return (
    <NavLink 
      to={to} 
      className={`${Style.button} ${className}`}
      onMouseDown={handleClick}
    >
      {text}
    </NavLink>
  );
};

export default Button;
