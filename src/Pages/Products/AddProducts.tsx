import { CategoryContext } from 'context/CategoryContext';
import React from 'react';
import { useLocation } from 'react-router';

const AddProducts = () => {
  const location = useLocation();
  // @ts-ignore
  const ids = location && location.state && location.state.catId;
  // @ts-ignore
  const catName = location && location.state && location.state.catName;

  return (
    <>
      <h4>
        Add Products to
        {catName}
      </h4>
    </>
  );
};

export default AddProducts;
