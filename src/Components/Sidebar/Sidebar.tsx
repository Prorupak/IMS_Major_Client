/* eslint-disable react/no-array-index-key */
import React from 'react';
import Icons from '../../Assets/Icons/Icon';
import * as Elements from './Element.Sidebar';
import * as SidebarElements from './SidebarData';

const Sidebar = () => {
  return (
    <>
      <Elements.MainWrapper>
        <Elements.Wrapper>
          <Elements.DashSection>
            {SidebarElements.DashSection.map((item, index) => {
              return (
                <Elements.MapWrapper>
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.ListItemIcon alt={item.title} src={item.icon} />
                    {item.title}
                    <Elements.DropDownIcon src={item.dropDown} />
                  </Elements.QLink>
                </Elements.MapWrapper>
              );
            })}
          </Elements.DashSection>
          <Elements.Line />
          <Elements.SalesSection>
            {SidebarElements.SalesSection.map((item, index) => {
              return (
                <>
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.ListItemIcon alt={item.title} src={item.icon} />
                    {item.title}
                  </Elements.QLink>
                </>
              );
            })}
          </Elements.SalesSection>
          <Elements.Line />
          <Elements.PurchaseSection>
            {SidebarElements.PurchaseSection.map((item, index) => {
              return (
                <>
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.ListItemIcon alt={item.title} src={item.icon} />
                    {item.title}
                  </Elements.QLink>
                </>
              );
            })}
          </Elements.PurchaseSection>
          <Elements.Line />
          <Elements.IntSection>
            {SidebarElements.IntSection.map((item, index) => {
              return (
                <>
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.ListItemIcon alt={item.title} src={item.icon} />
                    {item.title}
                  </Elements.QLink>
                </>
              );
            })}
          </Elements.IntSection>
          <Elements.Line />
          <Elements.Document>
            {SidebarElements.Document.map((item, index) => {
              return (
                <>
                  <Elements.QLink key={index} to={item.path}>
                    <Elements.ListItemIcon alt={item.title} src={item.icon} />
                    {item.title}
                  </Elements.QLink>
                </>
              );
            })}
          </Elements.Document>
        </Elements.Wrapper>
        <Elements.Mini>
          <Elements.Icon alt="Toggle" src={Icons.SideClose} />
        </Elements.Mini>
      </Elements.MainWrapper>
    </>
  );
};

export default Sidebar;
