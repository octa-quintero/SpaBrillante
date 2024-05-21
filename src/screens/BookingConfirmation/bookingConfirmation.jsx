import React from 'react';
import data from '../../data/slots.json';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmTimeSlot } from '../../redux/actions/confimeTimeSlots';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from '@fortawesome/free-solid-svg-icons';
import style from '../../styles-components/bookingConfirmation.module.css';

const BookingConfirmation = () => {
  const { serviceName, date, selectedTimeSlot } = useParams();
  const additionalData = data[selectedTimeSlot];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmTurn = async () => {
    try {
      await dispatch(confirmTimeSlot({ serviceName, date, selectedTimeSlot }));
      navigate(`/turnos?reset=true`);
    } catch (error) {
      console.error('Error al confirmar el turno:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.container}>
      <h2>Confirmar Turno</h2>
      <div className={style.content}>
        <p>Nombre del servicio: <b>{serviceName}</b></p>
        <p>Fecha: <b>{date}</b></p>
        <p>Horario: <b>{selectedTimeSlot}</b></p>
        <div className={style.buttonContent}>
          <button className={style.nextButton} onClick={handleConfirmTurn}>Confirmar</button>
          <button onClick={handleGoBack} className={style.iconButton}>
            <FontAwesomeIcon icon={faBan} className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
