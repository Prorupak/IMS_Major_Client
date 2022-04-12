/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Fade, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuAntd } from 'antd';
import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import { TooltipMui } from 'Themes/MaterialUI';
import { Button, Heading, Icon as Icons, Item } from 'Themes/utilityThemes';
import useDelete from 'Hooks/useDelete';
import { CategoryContext, CategoryData } from 'context/CategoryContext';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-15);
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 28px;
  display: flex;
  align-items: center;
  gap: var(--spacing-15);
  img {
    width: 13px;
    height: 13px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  /* justify-content: space-between; */
`;

const StyledMenuAntd = styled(MenuAntd)`
  && {
    .ant-menu-horizontal {
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-14);
      background-color: red;
    }
  }
  position: relative;
  left: -10px;
  bottom: -3px;
`;
const CompHeader = ({ current, handleClicked, info }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { toggleHandle } = React.useContext(ToggleContext);
  const { product } = React.useContext(CategoryContext);

  console.log('product', product);

  // console.log('compheader', info)

  const { id } = info

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { handleDelete } = useDelete(
    `http://localhost:9001/api/categories/${id}`
  );

  const onNavigate = () => {
    navigate(`/product/edit/${id}`, { state: { from: location.pathname } });
  }

  return (
    <>
      <HeaderWrapper>
        <Heading style={{
          textTransform: 'capitalize',
        }}>{info?.name}</Heading>
        <IconWrapper>
          <TooltipMui title="Edit Product">
            <Button onClick={onNavigate}>
              <Icons src={Icon.Edit} />
            </Button>
          </TooltipMui>
          <Button
            //     onClick={onNavigate}
            style={{
              background: 'var(--color-secondary)'
              // padding: '0px 8px'
            }}>
            Adjust Stock
          </Button>
          <Menu
            anchorEl={anchorEl}
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button'
            }}
            onClose={handleClose}
            open={open}
            TransitionComponent={Fade}>
            <MenuItem onClick={toggleHandle}>
              <p onClick={handleDelete}>Delete</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>Mark as Inactive</MenuItem>
          </Menu>
          <Button
            aria-controls={open ? 'fade-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            id="fade-button"
            onClick={handleClick}>
            <span>More</span>
            <Icons src={Icon.DrpDwn} />
          </Button>
          <IconButton>
            <Icons src={Icon.Close} />
          </IconButton>
        </IconWrapper>
      </HeaderWrapper>
      <HeaderContent>
        <Item fontSize="12px" fontWeight="500" width="0px" style={{
          minWidth: '46px',
          maxWidth: '60px'
        }}>
          {info?.sku}
        </Item>
        <Item fontSize="12px" fontWeight="600">
          -
        </Item>
        <Item
          fontSize="12px"
          fontWeight="500"
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img alt="" src={Icon.Return} />
          Returnable
        </Item>
      </HeaderContent>
      <StyledMenuAntd
        mode="horizontal"
        onClick={handleClicked}
        selectedKeys={[current]}
        style={{
          fontSize: '13px',
          lineHeight: '20px'
        }}>
        <MenuAntd.Item key="overview" style={{ padding: '10px' }}>
          Overview
        </MenuAntd.Item>
        <MenuAntd.Item key="transaction" style={{ padding: '10px' }}>
          Transactions
        </MenuAntd.Item>
        <MenuAntd.Item key="history" style={{ padding: '10px' }}>
          History
        </MenuAntd.Item>
      </StyledMenuAntd>
    </>
  );
};

export default CompHeader;































