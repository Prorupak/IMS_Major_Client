import axios from 'axios';
import React from 'react';
import Context from '../../../contexts/context';
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from './ELements.CatSide';

const CatSide = () => {
  const { category, categoryDispatch } = React.useContext(Context);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:9001/api/categories');
      console.log('category CSP===', data);
      categoryDispatch({ type: 'GET_CATEGORIES', payload: { data } });
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Elements.MainWrapper>
        <Elements.Header>
          <Elements.HeaderWrapper>
            <p>Categories</p>
            <Elements.Icon src={Icon.Close} />
          </Elements.HeaderWrapper>
        </Elements.Header>
        <Elements.Contents>
          {category.data.map((item: any) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Elements.Item key={item.id}>{item.name}</Elements.Item>;
          })}
        </Elements.Contents>
      </Elements.MainWrapper>
    </>
  );
};

export default CatSide;
