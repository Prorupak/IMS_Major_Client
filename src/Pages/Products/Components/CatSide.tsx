import React, { useEffect } from 'react';
import axios from 'axios';
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from './ELements.CatSide';

interface props {
  _id?: string;
  name: string;
  date: Date;
}

const CatSide = () => {
  const [getItem, setGetItem] = React.useState([] as props[]);

  const fetchData = async () => {
    await axios
      .get('http://localhost:9001/api/products')
      .then((data) => {
        console.log(data.data);
        setGetItem(data.data);
      })
      .catch((errs) => {
        console.log(errs);
      });
  };
  // @ts-ignore
  useEffect(() => {
    fetchData();
  }, []);
  console.log(getItem);
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
          {getItem.map((item: props, index: any) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Elements.Item key={index}>{item.name}</Elements.Item>;
          })}
        </Elements.Contents>
      </Elements.MainWrapper>
    </>
  );
};

export default CatSide;
