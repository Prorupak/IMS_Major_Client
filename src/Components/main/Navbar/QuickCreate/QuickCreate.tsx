/* eslint-disable react/no-array-index-key */
import React from 'react';
import Icon from '../../../../Assets/Icons/Icon';
import * as Elements from './Elements.QuickCreate';
import { General, Sales, Purchases } from './QuickCreateList';

const QuickCreate = () => {
  return (
    <>
      <Elements.QuickCreate>
        <Elements.QuickCreateWrapper>
          <Elements.TitleWrapper>
            <Elements.Title>
              <Elements.Icon src={Icon.General} />
              General
            </Elements.Title>
            <Elements.ContentWrapper>
              {General.map((item, index) => {
                return (
                  <Elements.Content key={index} to={item.path}>
                    <Elements.Icon
                      alt={item.title}
                      src={item.icon}
                      style={{ width: '14px' }}
                    />
                    {item.title}
                  </Elements.Content>
                );
              })}
            </Elements.ContentWrapper>
          </Elements.TitleWrapper>
          <Elements.TitleWrapper>
            <Elements.Title>
              <Elements.Icon src={Icon.General} />
              Sales
            </Elements.Title>
            <Elements.ContentWrapper>
              {Sales.map((item, index) => {
                return (
                  <Elements.Content key={index} to={item.path}>
                    <Elements.Icon
                      alt={item.title}
                      src={item.icon}
                      style={{ width: '14px' }}
                    />
                    {item.title}
                  </Elements.Content>
                );
              })}
            </Elements.ContentWrapper>
          </Elements.TitleWrapper>
          <Elements.TitleWrapper>
            <Elements.Title>
              <Elements.Icon src={Icon.General} />
              Purchases
            </Elements.Title>
            <Elements.ContentWrapper>
              {Purchases.map((item, index) => {
                return (
                  <Elements.Content key={index} to={item.path}>
                    <Elements.Icon
                      alt={item.title}
                      src={item.icon}
                      style={{ width: '14px' }}
                    />
                    {item.title}
                  </Elements.Content>
                );
              })}
            </Elements.ContentWrapper>
          </Elements.TitleWrapper>
        </Elements.QuickCreateWrapper>
      </Elements.QuickCreate>
    </>
  );
};

export default QuickCreate;
