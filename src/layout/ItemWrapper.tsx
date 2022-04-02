import { CategoryContext } from 'context/CategoryContext';
import Items from 'layout/Items';
import Categories from 'Pages/Categories/Categories';
import React from 'react';
import { Outlet } from 'react-router';

const CategoryContainer = () => {
  // const { update } = React.useContext(CategoryContext);

  // const { id } = update;

  return (
    <Items>
      <Categories />
    </Items>
  );
};

export default CategoryContainer;

