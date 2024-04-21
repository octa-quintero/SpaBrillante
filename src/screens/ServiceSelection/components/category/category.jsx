import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../../../redux/actions/actionService';
import style from './category.module.css';

const Category = ({ onCategoryChange }) => {
  const dispatch = useDispatch();
  const { services } = useSelector(state => state.service);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  useEffect(() => {
    if (services) {
      const uniqueCategories = Array.from(new Set(services.map(service => service.category)));
      setCategories(uniqueCategories);
    }
  }, [services]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div className={style.filterContainer}>
      <select onChange={handleCategoryChange} className={style.containerfilter}>
        <option className={style.filter} value="">Todas las categorías</option>
        {categories.map((category, index) => (
          <option className={style.filterOption} key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};  

export default Category;
