import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper
} from 'Themes/utilityThemes';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../Hooks/useToggle';
import Icon from '../../Assets/Icons/Icon';

const Nav = styled.nav``;

const Wrapper = styled.div`
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
  const location = useLocation();
  const navigate = useNavigate();
  // @ts-ignore
  const ids = location && location.state && location.state.catId;
  // @ts-ignore
  const catName = location && location.state && location.state.catName;
  console.log('ids', ids);

  const onNavigate = () => {
    navigate('/add/:id', { state: { catId: ids, catName } });
  };
  return (
    <>
      <Nav>
        <Wrapper>
          <LeftSection>
            <ButtonWrapper>
              <Button>
                <IconButton src={Icon.Edit} />
              </Button>
              <Button
                onClick={onNavigate}
                style={{ background: 'var(--color-secondary)' }}>
                <IconButton src={Icon.BPlus} />
                <p>Add Item</p>
              </Button>
              <Button>
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
