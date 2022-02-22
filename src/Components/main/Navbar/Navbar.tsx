import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Icon from 'Assets/Icons/Icon';
import Image from 'Assets/Image/Image';
import { alpha, InputBase } from '@mui/material';
// import QuickCreate from './QuickCreate/QuickCreate';

/* eslint-disable indent */

const Nav = styled.nav`
  width: 100%;
`;

const NavWrapper = styled.div`
  height: ${(props) => {
    return props.theme.emSizes.p60x;
  }};

  display: flex;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => {
    return props.theme.color.white;
  }};
  width: 100%;
  margin: 0 var(--spacing-15);
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const LeftIcons = styled.div`
  display: flex;
  gap: ${(props) => {
    return props.theme.emSizes.p35x;
  }};
  align-items: center;
`;

const MiddleIcons = styled.div`
  display: flex;
  gap: 35px;
`;

const Icons = styled(motion.img).attrs({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
})`
  cursor: pointer;
`;

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  padding: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  marginRight: 'var(--spacing-5)',
  marginLeft: '5px',
  width: '100%'
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto'
  // }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  padding: '0 5px',
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '5px, 5px, 5px 0',
    // vertical padding + font size from searchIcon
    paddingLeft: '5px',
    // transition: theme.transitions.create('width'),
    width: '100%'
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch'
    // }
  }
}));

const Header = () => {
  return (
    <>
      <Nav>
        <NavWrapper>
          <Navbar>
            <LeftIcons>
              <Icons alt="Quick" src={Icon.QuickCreate} />
              <Icons alt="Quick" src={Icon.Recent} />
              <Search>
                <SearchIconWrapper>
                  <img alt="search" src={Icon.Setting} />
                  <img alt="search" src={Icon.DrpDwn} />
                </SearchIconWrapper>
                <StyledInputBase
                  inputProps={{ 'aria-label': 'search' }}
                  placeholder="Search…"
                />
              </Search>
            </LeftIcons>
            <RightIcons>
              <Icons alt="Drop" src={Icon.DropDown} />
              <MiddleIcons>
                <Icons alt="Quick" src={Icon.Faq} />
                <Icons alt="Quick" src={Icon.Setting} />
                <Icons alt="Quick" src={Icon.Notification} />
              </MiddleIcons>
              <Icons alt="profile" src={Image.Profile} />
            </RightIcons>
          </Navbar>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Header;
