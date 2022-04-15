import { CategoryContext } from 'context/CategoryContext';
import Items from 'layout/Items';
import React from 'react';
import { Outlet } from 'react-router';
import AddCategories from './AddCategories';
import CategoryForm from './CategoryForm';

const CategoryContainer = () => {
  return (
    <AddCategories>
      <Outlet />
    </AddCategories>
  );
};

export default CategoryContainer;







