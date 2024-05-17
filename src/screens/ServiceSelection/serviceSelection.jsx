import React, { useState } from 'react';
import Category from './components/category/category.jsx';
import FormCategory from './components/formCategory/formCategory.jsx';
import style from '../../styles-components//serviceSelection.module.css'

const ServiceSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <div className={style.container}>
      <Category onCategoryChange={handleCategoryChange} />
      <FormCategory selectedCategory={selectedCategory} />
    </div>
  );
};

export default ServiceSelection;
