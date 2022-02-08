import React from 'react';
// import { useFetch } from '../../../Hooks';
// import { GET_CATEGORIES } from '../../../constants/actionTypes';
// import Context from '../../../contexts/context';
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from './ELements.CatSide';

const CatSide = () => {
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
          {/* {data.map((item: any) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Elements.Item key={item.id}>{item.name}</Elements.Item>;
          })} */}
        </Elements.Contents>
      </Elements.MainWrapper>
    </>
  );
};

export default CatSide;
