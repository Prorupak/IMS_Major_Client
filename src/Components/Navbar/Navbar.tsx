import React from 'react';
import { Tooltip } from '@material-ui/core';
import * as Elements from './Element.Navbar';
import Icons from '../../Assets/Icons/Icon';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <>
      <Elements.MainWrapper>
        <Elements.LeftIcons>
          <Elements.LogoSection>
            <Elements.Logo>IMS</Elements.Logo>
          </Elements.LogoSection>

          <Tooltip arrow title="Quick Create">
            <Elements.Icon alt="QuickTab" src={Icons.Quick} />
          </Tooltip>
          <Tooltip arrow title="Recent Activities">
            <Elements.Icon alt="Recent" src={Icons.Recent} />
          </Tooltip>
          <Search />
        </Elements.LeftIcons>

        <Elements.RightIcons>
          <Elements.ProfileTxt>
            SDK Service
            <Elements.Icon alt="ProfileDown" src={Icons.ProfileDown} style={{ marginLeft: '10px' }} />
          </Elements.ProfileTxt>
          <Elements.MiddleIcons>
            <Tooltip arrow title="Notifications">
              <Elements.Icon alt="Notification" src={Icons.Notification} />
            </Tooltip>
            <Tooltip arrow title="Settings">
              <Elements.Icon alt="Settings" src={Icons.Setting} />
            </Tooltip>
            <Tooltip arrow title="FAQ">
              <Elements.Icon alt="FAQ" src={Icons.Faq} />
            </Tooltip>
          </Elements.MiddleIcons>
          <Elements.Icon alt="Avatar" src={Icons.Avatar} />
        </Elements.RightIcons>

      </Elements.MainWrapper>

    </>
  );
};

export default Navbar;
