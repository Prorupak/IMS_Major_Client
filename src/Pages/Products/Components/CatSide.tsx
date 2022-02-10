import axios from 'axios';
import React from 'react';
import Context from '../../../contexts/context';
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from './ELements.CatSide';
import useToggle from '../../../Hooks/useToggle';

const CatSide = () => {
  const { handleOpenMain } = useToggle();
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
      {/* {isOpen ? null : ( */}
      <Elements.MainWrapper>
        <Elements.Header>
          <Elements.HeaderWrapper>
            <p>Categories</p>
            <Elements.Icon onClick={handleOpenMain} src={Icon.Close} />
          </Elements.HeaderWrapper>
        </Elements.Header>
        <Elements.Contents>
          {category.data.map((item: any) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Elements.Item key={item.id}>{item.name}</Elements.Item>;
          })}
        </Elements.Contents>
      </Elements.MainWrapper>
      {/* )} */}
    </>
  );
};

export default CatSide;
