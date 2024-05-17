import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../../../redux/actions/actionService';
import style from '../../../../styles-components/formCategory.module.css';
import ButtonCard from '../../../../components/buttonCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCirclePlus,
  faCircleXmark 
} from '@fortawesome/free-solid-svg-icons';

const FormCategory = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [filteredServices, setFilteredServices] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const servicesState = useSelector(state => state.service) || {};
  const services = servicesState.services || [];

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = services.filter(service => service.category === selectedCategory);
      setFilteredServices(filtered);
    } else {
      setFilteredServices([...services]);
    }
  }, [services, selectedCategory]);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={style.container}>
      <ul>
        {services && services.length > 0 && filteredServices.map(service => (
          <li className={`${style.service} ${expandedId === service.id ? style.intense : ''}`} key={service.id}>
            <div className={style.category}>
              <h3>{service.name}</h3>
              <button 
  className={`${style.customButton} ${expandedId === service.id ? style.redButton : style.greenButton}`}
  onClick={() => toggleDescription(service.id)}
>
                {expandedId === service.id ? 
                  <FontAwesomeIcon icon={faCircleXmark} /> : 
                  <FontAwesomeIcon icon={faCirclePlus} />}
              </button>
            </div>
            {expandedId === service.id && (
              <div className={style.description}>
                <p className={style.descriptionText}>{service.description}</p>
                <ButtonCard className={style.Button} serviceName={service.name} onClick={() => toggleDescription(service.id)} />
              </div>
            )}
          </li>
        ))}
        {(!services || services.length === 0) && <div>No se encontraron servicios para esta categoría.</div>}
      </ul>
    </div>
  );
};

export default FormCategory;
