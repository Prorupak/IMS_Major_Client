/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fade, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuAntd } from 'antd';
import Icon from 'Assets/Icons/Icon';
import { motion } from 'framer-motion';
import useDelete from 'Hooks/useDelete';
import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TooltipMui } from 'Themes/MaterialUI';
import { Button, Heading, Icon as Icons, Item } from 'Themes/utilityThemes';

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'header header'
    'content content';
  grid-template-rows: auto auto;
  grid-template-columns: 100vh 100vh;
  padding: var(--spacing-15) var(--spacing-15);
`;

const Header = styled(motion.nav).attrs({})`
  position: relative;
  overflow: none;
  grid-area: header;
  display: flex;
  flex-direction: column;
  /* min-width: 100%; */
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-5);
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  /* justify-content: space-between; */
`;

const Body = styled(motion.div).attrs({})`
  grid-area: content;
  display: flex;
  justify-content: space-between;
`;

const LeftDetails = styled(motion.div).attrs({})``;

const RightDetails = styled(motion.div).attrs({})``;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})``;

const Summary = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})``;

const StockSummary = styled(motion.div).attrs({})``;

const StyledMenuAntd = styled(MenuAntd)`
  && {
    .ant-menu-horizontal {
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-14);
      background-color: red;
    }
  }
`;

const ProductsDetails = () => {
  const location = useLocation();
  const [current, setCurrent] = React.useState('overview');
  const { toggleHandle } = React.useContext(ToggleContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClicked = (event: any) => {
    console.log('click', event);
    setCurrent(event.key);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // @ts-ignore
  const ids = location && location.state && location.state.row;

  console.log('row=>>>>', ids);
  // @ts-ignore
  const catName = location && location.state && location.state.catName;

  const { handleDelete } = useDelete(
    `http://localhost:9001/api/categories/${ids}`
  );
  return (
    <Grid>
      <Header>
        <HeaderWrapper>
          <Heading>name</Heading>
          <IconWrapper>
            <TooltipMui title="Edit Product">
              <Button>
                <Link to={`/product/edit/${ids}`}>
                  <Icons src={Icon.Edit} />
                </Link>
              </Button>
            </TooltipMui>
            <Button
              //     onClick={onNavigate}
              style={{ background: 'var(--color-secondary)' }}>
              <p>Adjust Stock</p>
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
          <Item fontSize="13px" fontWeight="500">
            SKU
          </Item>
          <Item fontSize="13px" fontWeight="600">
            -
          </Item>
          <Item fontSize="13px" fontWeight="500">
            ReturnAble
          </Item>
        </HeaderContent>
        <StyledMenuAntd
          mode="horizontal"
          onClick={handleClicked}
          selectedKeys={[current]}
          style={{
            fontSize: '13px',
            lineHeight: '20px',
            padding: '10px'
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
      </Header>
      <Body>
        <LeftDetails>
          <PrimaryDetails>
            <p>primary</p>
          </PrimaryDetails>
          <SalesInfo>
            <p>sales info</p>
          </SalesInfo>
          <Summary>
            <p>summary</p>
          </Summary>
        </LeftDetails>
        <RightDetails>
          <ImageContainer>
            <p>image</p>
          </ImageContainer>
          <StockSummary>
            <p>stock summary</p>
          </StockSummary>
        </RightDetails>
      </Body>
    </Grid>
  );
};

export default ProductsDetails;

