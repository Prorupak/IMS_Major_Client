/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as Elements from './Element.QuickAction';
import Icon from '../../../Assets/Icons/Icon';
import { General, Sales, Purchases } from './QuickActionData';

const QuickAction = () => {
  return (
    <>
      <Elements.MainWrapper style={{ width: '535px' }}>
        <Elements.QuickActionWrapper>
          <Elements.GeneralSection>
            <Elements.Title>
              <Elements.Icon alt="general" src={Icon.General} />
              <p>General</p>
            </Elements.Title>
            <Elements.QuickActionList>
              {General.map((item, index) => {
                return (
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.Icon alt={item.title} src={item.icon} style={{ width: '8px' }} />
                    {item.title}
                  </Elements.QLink>
                );
              })}
            </Elements.QuickActionList>
          </Elements.GeneralSection>

          <Elements.PurchasesSection>
            <Elements.Title>
              <Elements.Icon alt="general" src={Icon.Purchase} />
              <p>purchases</p>
            </Elements.Title>
            <Elements.QuickActionList>
              {Purchases.map((item, index) => {
                return (
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.Icon alt={item.title} src={item.icon} style={{ width: '8px' }} />
                    {item.title}
                  </Elements.QLink>
                );
              })}
            </Elements.QuickActionList>
          </Elements.PurchasesSection>
          <Elements.SalesSection>
            <Elements.Title>
              <Elements.Icon alt="general" src={Icon.Sales} />
              <p>sales</p>
            </Elements.Title>
            <Elements.QuickActionList>
              {Sales.map((item, index) => {
                return (
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.Icon alt={item.title} src={item.icon} style={{ width: '8px' }} />
                    {item.title}
                  </Elements.QLink>
                );
              })}
            </Elements.QuickActionList>
          </Elements.SalesSection>
        </Elements.QuickActionWrapper>
      </Elements.MainWrapper>
    </>
  );
};

export default QuickAction;
