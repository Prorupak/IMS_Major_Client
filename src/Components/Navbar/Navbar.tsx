/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Tooltip } from '@material-ui/core';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import * as Elements from './Element.Navbar';
import Icons from '../../Assets/Icons/Icon';
import Search from '../Search/Search';
import QuickAction from './QuickAction/QuickAction';
import Notification from './Notification/Notification';
// import { userContext } from '../../Hooks';
import { userContext } from '../../Hooks/useContext/UsersContext';

// import Notification from './Notification/Notification';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);
  const username = useContext(userContext);

  const handleOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  const handleOpenNotification = () => {
    setOpenNotification((prev) => {
      return !prev;
    });
  };
  const handleClickAway = () => {
    setOpen(false);
    setOpenNotification(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Elements.MainWrapper>
          <Elements.LeftIcons>
            <Elements.LogoSection>
              <Elements.Logo>IMS</Elements.Logo>
            </Elements.LogoSection>

            <Tooltip arrow title="Quick Create">
              <Elements.Icon
                alt="QuickTab"
                onClick={handleOpen}
                src={Icons.Quick}
              />
            </Tooltip>
            <Tooltip arrow title="Recent Activities">
              <Elements.Icon alt="Recent" src={Icons.Recent} />
            </Tooltip>
            <Search />
          </Elements.LeftIcons>

          <Elements.RightIcons>
            <Elements.ProfileTxt>
              {username}

              <Elements.Icon
                alt="ProfileDown"
                src={Icons.ProfileDown}
                style={{ marginLeft: '10px' }}
              />
            </Elements.ProfileTxt>
            <Elements.MiddleIcons>
              <Tooltip arrow title="Notifications">
                <Elements.Icon
                  alt="Notification"
                  onClick={handleOpenNotification}
                  src={Icons.Notification}
                />
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
      </ClickAwayListener>

      {/* <Notification /> */}
      {open && <QuickAction />}
      {openNotification && <Notification />}
    </>
  );
};

export default Navbar;
