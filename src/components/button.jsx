import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faClock } from '@fortawesome/free-solid-svg-icons';
import Style from "../styles-components/button.module.css";

const Button = ({ to, text, className, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, to]);

  return (
    <NavLink 
      to={to} 
      className={`${Style.button} ${className} ${isActive ? Style.active : ''}`}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </NavLink>
  );
};

export default Button;
