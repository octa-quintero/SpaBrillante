import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { getSlots } from '../../redux/actions/slotsService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from '@fortawesome/free-solid-svg-icons';
import style from '../../styles-components/scheduleSelection.module.css';

const ScheduleSelection = () => {
  const dispatch = useDispatch();
  const slots = useSelector(state => state.slots) || {};
  const { serviceName } = useParams();
  const { availableTimeslots, date } = slots;
  const [selectedTimeSlotIndex, setSelectedTimeSlotIndex] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSlots());
  }, [dispatch]);

  const handleSelectTimeSlot = (index) => {
    setSelectedTimeSlotIndex(index);
    setIsNextButtonEnabled(true);
  };

  const handleGoBack = () => {
    // Restablecer los estados
    setSelectedTimeSlotIndex(null);
    setIsNextButtonEnabled(false);
  };

  return (
    <div className="container">
      <div className={style.service}>
        <h3>Horarios para</h3>
        <h3 className={style.service1}><b>{serviceName}</b></h3>
      </div>
      <p>Fecha: <b>{date}</b></p>
      {availableTimeslots && availableTimeslots.length > 0 && (
        <ul className="grid">
          {availableTimeslots.map((timeSlot, index) => (
            <li key={index} className={`grid-item ${selectedTimeSlotIndex === index ? style.selected : ''}`}>
              <button
                className={`${style.hourButton}`}
                onClick={() => handleSelectTimeSlot(index)}
              >
                {timeSlot}
              </button>
            </li>
          ))}
        </ul>
      )}

      {availableTimeslots && availableTimeslots.length === 0 && (
        <p>No se encontraron horarios disponibles.</p>
      )}

      <div className={style.ButtonContainer}>
        <NavLink
          to={isNextButtonEnabled ? `/confirmar-turno/${serviceName}/${date}/${availableTimeslots[selectedTimeSlotIndex]}` : '#'}
          className={`${style.nextButton} ${isNextButtonEnabled ? style.active : ''}`}
          disabled={!isNextButtonEnabled}
        >
          Confirmar
        </NavLink>
        <button onClick={handleGoBack} className={style.iconButton}>
          <FontAwesomeIcon icon={faBan} className={style.icon} />
        </button>
      </div>
    </div>
  );
}

export default ScheduleSelection;
