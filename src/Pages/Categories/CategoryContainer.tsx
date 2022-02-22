import Items from 'layout/Items';
import React from 'react';
import { Outlet } from 'react-router';

const CategoryContainer = () => {
  return (
    <Items>
      <Outlet />
    </Items>
  );
};

export default CategoryContainer;
