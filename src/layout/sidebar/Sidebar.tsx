/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import * as Elements from '../../Styles/Elements.Sidebar';
import Logo from './Logo';
import SideBar from './NavLink';

// const sales = [
//   {
//     f1: 'customer',
//     f2: 'Sales Order',
//     f3: 'Customer Payment'
//   }
// ];

const Sidebar = (props: any) => {
  // const [compact, setCompact] = React.useState(0);
  return (
    <>
      <Elements.StyledNav {...props}>
        <Logo />
        <Elements.Wrapper>
          <Elements.NavLinkGroup>
            <Elements.StyledLink to="/">
              <Elements.Icons src={Icon.Dashboard} />
              Dashboard
            </Elements.StyledLink>
            {/* <p>Dashboard</p> */}
            {/* <SideBar icons={Icon.Dashboard} label="Dashboard" /> */}
          </Elements.NavLinkGroup>
          <Elements.NavLinkGroup>
            <SideBar icons={Icon.Inventory} label="Inventory" />
          </Elements.NavLinkGroup>
          <Elements.GroupWrapper>
            <SideBar
              details={['Customer', 'Sales Order']}
              icons={Icon.SalesSide}
              label="Sales"
            />
          </Elements.GroupWrapper>
          <Elements.GroupWrapper>
            <SideBar icons={Icon.PurchaseSide} label="Purchases" />
          </Elements.GroupWrapper>
          <Elements.NavLinkGroup>
            <Elements.StyledLink to="/">
              <Elements.Icons src={Icon.Reports} />
              <p>Reports</p>
            </Elements.StyledLink>
            {/* <p>Dashboard</p> */}
            {/* <SideBar icons={Icon.Dashboard} label="Dashboard" /> */}
          </Elements.NavLinkGroup>
          <Elements.NavLinkGroup>
            <Elements.StyledLink to="/">
              <Elements.Icons src={Icon.Documents} />
              <p>Documents</p>
            </Elements.StyledLink>
            {/* <p>Dashboard</p> */}
            {/* <SideBar icons={Icon.Dashboard} label="Dashboard" /> */}
          </Elements.NavLinkGroup>
          {/* <button>
            <Elements.Icons src={Icon.DropSide} />
          </button> */}
        </Elements.Wrapper>
      </Elements.StyledNav>
    </>
  );
};

export default Sidebar;
