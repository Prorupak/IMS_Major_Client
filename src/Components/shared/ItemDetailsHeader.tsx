/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper
} from 'Themes/utilityThemes';
import { useLocation, useNavigate } from 'react-router';
import { Fade, Menu, MenuItem, Tooltip } from '@mui/material';
import useDelete from 'Hooks/useDelete';
import { Link } from 'react-router-dom';
import { CategoryData } from 'context/CategoryContext';
import Icon from '../../Assets/Icons/Icon';

const Nav = styled.nav``;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: var(--spacing-10) var(--spacing-15);
  .is-close {
    min-width: 20px;
  }
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
`;
const RightSection = styled.div`
  cursor: pointer;
`;
interface Props {
  toggle: (action: any) => void;
}

const ItemDetailsHeader: React.FC<Props> = ({ toggle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { categoryDetails } = React.useContext(CategoryData);
  const open = Boolean(anchorEl);

  console.log('categoryDetails', categoryDetails.id);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { handleDelete } = useDelete(
    `http://localhost:9001/api/categories/${categoryDetails.id}`
  );

  return (
    <>
      <Nav>
        <Wrapper>
          <LeftSection>
            <ButtonWrapper>
              <Tooltip title="Edit Category">
                <Button>
                  <Link to={`/category/edit/${categoryDetails.id}`}>
                    <IconButton src={Icon.Edit} />
                  </Link>
                </Button>
              </Tooltip>
              <Link to={`/add/${categoryDetails.id}`}>
                <Button style={{ background: 'var(--color-secondary)' }}>
                  <IconButton src={Icon.BPlus} />
                  <p>Add Item</p>
                </Button>
              </Link>
              <Menu
                anchorEl={anchorEl}
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button'
                }}
                onClose={handleClose}
                open={open}
                TransitionComponent={Fade}>
                <MenuItem onClick={toggle}>
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
                <IconButton src={Icon.DrpDwn} />
              </Button>
            </ButtonWrapper>
          </LeftSection>
          <RightSection>
            <Icons onClick={toggle} src={Icon.Close} />
          </RightSection>
        </Wrapper>
      </Nav>
    </>
  );
};

export default ItemDetailsHeader;













