import React from 'react';
import Navbar from '../Components/main/Navbar/Navbar';
import * as Elements from '../Styles/Elements.Layout';
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children, ...rest }: any) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggle = () => {
  //   return setIsOpen(!isOpen);
  // };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Elements.Grid {...rest}>
      <Elements.GridNav>
        <Sidebar />
      </Elements.GridNav>
      <Elements.GridHeader>
        <Navbar />
      </Elements.GridHeader>
      <Elements.GridMain>{children}</Elements.GridMain>
    </Elements.Grid>
  );
};

export default Layout;
