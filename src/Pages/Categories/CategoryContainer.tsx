import { CategoryContext } from 'context/CategoryContext';
import Items from 'layout/Items';
import React from 'react';
import { Outlet } from 'react-router';
import AddCategories from './AddCategories';
import CategoryForm from './CategoryForm';
import UpdateCategories from './UpdateCategories';

const CategoryContainer = () => {
  const { update } = React.useContext(CategoryContext);

  const { id } = update;

  return (
    <Items>
      <Outlet />
    </Items>
  );
};

export default CategoryContainer;

