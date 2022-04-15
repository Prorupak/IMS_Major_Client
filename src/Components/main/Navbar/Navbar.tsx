import { motion } from 'framer-motion';
import { BiSearchAlt } from 'react-icons/bi';
import React from 'react';
import styled from 'styled-components';
import Icon from 'Assets/Icons/Icon';
import Image from 'Assets/Image/Image';
import { InputBase, Menu, MenuItem, Tooltip } from '@mui/material';
import QuickCreate from './QuickCreate/QuickCreate';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


const Nav = styled(motion.nav).attrs({
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
  transition: { duration: 0.4 }
})`
  width: 100%;
`;

const NavWrapper = styled.div`
  height: ${(props) => {
    return props.theme.emSizes.p60x;
  }};

  display: flex;
`;

const Navbar = styled.div<{ collapsed: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => {
    return props.theme.color.white;
}};
  width: 100%;
  padding: 0 var(--spacing-15);
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
  marginRight: 'var(--spacing-5)',
  marginLeft: '5px',
  width: '100%'
}));

const SearchIconWrapper = styled.div`
  cursor: pointer;
  padding: 0 5px;
  height: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(BiSearchAlt).attrs({
  size: '1.5em',
  color: 'var(--color-primary-dark)'
})``;

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

const StyledMenu = styled(Menu)`
  .MuiMenuItem-root {
    background: none;
  }
  .MuiMenuItem-root:hover {
    background: none;
  }
`;
const StyledMenuItem = styled(MenuItem)`
  .MuiMenuItem-root {
    background: none;
  }
  .MuiMenuItem-root:hover {
    background: none;
  }
`;

type TNav = {
  collapsed: boolean;
  onCollapse: (collapsed: any) => void;
}

const Header: React.FC<TNav> = ({ onCollapse, collapsed }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('nav', collapsed);
  return (
    <>
      <Nav>
        <NavWrapper>
          <Navbar collapsed={collapsed}>
            <LeftIcons>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: onCollapse,
                style: {
                  fontSize: '1.2em',
                },
              })}
              <Tooltip arrow title="Quick Create">
                <Icons
                  alt="Quick"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  id="basic-button"
                  onClick={handleClick}
                  src={Icon.QuickCreate}
                />
              </Tooltip>
              <StyledMenu
                anchorEl={anchorEl}
                id="basic-menu"
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
                onClose={handleClose}
                open={open}>
                <StyledMenuItem onClick={handleClose}>
                  <QuickCreate />
                </StyledMenuItem>
              </StyledMenu>
              <Icons alt="Quick" src={Icon.Recent} />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
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
