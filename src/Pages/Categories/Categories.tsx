/* eslint-disable object-shorthand */
import * as React from 'react';
// import axios from 'axios';
// import Context from '../../contexts/context';
import axios from 'axios';
import { useDocumentTitle } from '../../Hooks';
import { GET_CATEGORIES } from '../../constants/actionTypes';
import Context from '../../contexts/context';
// eslint-disable-next-line react/prop-types
const Categories = () => {
  const { category, categoryDispatch } = React.useContext(Context);
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:9001/api/categories');
      console.log('category CSP===', res.data);
      categoryDispatch({ type: GET_CATEGORIES, payload: { data: res.data } });
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // convert objects into array

  useDocumentTitle('Category');

  return (
    <div style={{ width: '100%' }}>
      {category.data.map((item: any) => {
        return (
          <>
            <div key={item.id}>{item.name}</div>
          </>
        );
      })}
      {/* {category} */}
    </div>
  );
};

export default Categories;
