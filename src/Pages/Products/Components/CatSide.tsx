import React from 'react';
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from './ELements.CatSide';

const CatSide = () => {
  return (
    <>
      {/* {isOpen ? null : ( */}
      <Elements.MainWrapper>
        <Elements.Header>
          <Elements.HeaderWrapper>
            <p>Categories</p>
            <Elements.Icon src={Icon.Close} />
          </Elements.HeaderWrapper>
        </Elements.Header>
        <Elements.Contents>
          {/* {category.data.map((item: any) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Elements.Item key={item.id}>{item.name}</Elements.Item>;
          })} */}
        </Elements.Contents>
      </Elements.MainWrapper>
      {/* )} */}
    </>
  );
};

export default CatSide;
