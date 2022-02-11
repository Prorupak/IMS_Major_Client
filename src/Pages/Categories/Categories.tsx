/* eslint-disable object-shorthand */
import * as React from 'react';
import axios from 'axios';
import { useDocumentTitle } from '../../Hooks';
import { GET_CATEGORIES } from '../../constants/actionTypes';

// eslint-disable-next-line react/prop-types
const Categories = () => {
  // convert objects into array

  useDocumentTitle('Category');

  return <div style={{ width: '100%' }}>{/* {category} */}</div>;
};

export default Categories;
