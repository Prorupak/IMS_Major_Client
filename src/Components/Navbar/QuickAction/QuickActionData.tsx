/* eslint-disable import/prefer-default-export */
// /* eslint-disable import/prefer-default-export */
// import React from 'react';
// import styled from 'styled-components';
// import Icons from '../../../Assets/Icons/Icon';

// export const MainWrapper = styled.div``;

// export const Icon = styled.img``;

// export const Title = styled.div`
//   font-family: 'Poppins', sans-serif;
//   font-style: normal;
//   font-weight: 300;
//   font-size: ${(props) => {
//     return props.theme.fontSize.p13x;
//   }};
//   line-height: 19px;
//   color: #727272;
// `;

// const QuickActionData = (title: any) => {
//   return (
//     <>
//       <MainWrapper>
//         <Icon alt="Plus" src={Icons.Plus} />
//         <Title>{title}</Title>
//       </MainWrapper>
//     </>
//   );
// };

// export default QuickActionData;

// import React from 'react';

import Icon from '../../../Assets/Icons/Icon';

export const General = [
  {
    title: 'Add Users',
    icon: Icon.Plus,
    path: '/AddUser'
  },
  {
    title: 'Item',
    icon: Icon.Plus,
    path: '/Item'
  },
  {
    title: 'Item Groups',
    icon: Icon.Plus,
    path: '/ItemGroups'
  },
  {
    title: 'Inventory Adjustment',
    icon: Icon.Plus,
    path: '/InventoryAdjustment'
  }
];

export const Sales = [
  {
    title: 'Customer',
    icon: Icon.Plus,
    path: '/Customer'
  },
  {
    title: 'Invoices',
    icon: Icon.Plus,
    path: '/Invoices'
  },
  {
    title: 'Sales Order',
    icon: Icon.Plus,
    path: '/SalesOrder'
  },
  {
    title: 'Packages',
    icon: Icon.Plus,
    path: '/Packages'
  },
  {
    title: 'Customer Payment',
    icon: Icon.Plus,
    path: '/CustomerPayment'
  },
  {
    title: 'Credit Notes',
    icon: Icon.Plus,
    path: '/CreditNotes'
  }
];

export const Purchases = [
  {
    title: 'Vendor',
    icon: Icon.Plus,
    path: '/Vendor'
  },
  {
    title: 'Bills',
    icon: Icon.Plus,
    path: '/Bills'
  },
  {
    title: 'Purchase Orders',
    icon: Icon.Plus,
    path: '/PurchaseOrders'
  },
  {
    title: 'Vender Payment',
    icon: Icon.Plus,
    path: '/VenderPayment'
  },
  {
    title: 'Vendor Credits',
    icon: Icon.Plus,
    path: '/Vendor Credits'
  }
];
