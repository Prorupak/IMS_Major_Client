import React from 'react';
import Icon from '../../../Assets/Icons/Icon';
import Image from '../../../Assets/Image/Image';
import * as Elements from '../../../Styles/Elements.Navbar';
// import QuickCreate from './QuickCreate/QuickCreate';

const Navbar = () => {
  return (
    <>
      <Elements.Nav>
        <Elements.NavWrapper>
          <Elements.Navbar>
            <Elements.LeftIcons>
              <Elements.Icon alt="Quick" src={Icon.QuickCreate} />
              <Elements.Icon alt="Quick" src={Icon.Recent} />
            </Elements.LeftIcons>
            <Elements.RightIcons>
              <Elements.Icon alt="Drop" src={Icon.DropDown} />
              <Elements.MiddleIcons>
                <Elements.Icon alt="Quick" src={Icon.Faq} />
                <Elements.Icon alt="Quick" src={Icon.Setting} />
                <Elements.Icon alt="Quick" src={Icon.Notification} />
              </Elements.MiddleIcons>
              <Elements.Icon alt="profile" src={Image.Profile} />
            </Elements.RightIcons>
          </Elements.Navbar>
        </Elements.NavWrapper>
      </Elements.Nav>
    </>
  );
};

export default Navbar;
