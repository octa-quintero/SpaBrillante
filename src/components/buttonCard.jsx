import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from "../styles-components/buttonCard.module.css";

const ButtonCard = ({ serviceName, serviceLink, onClick }) => {
  return (
    <NavLink to={`/select-time/${encodeURIComponent(serviceName)}`} className={Style.button} onClick={onClick}>
      <p>Select</p>
    </NavLink>
  );
};

export default ButtonCard;
