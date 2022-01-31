import styled from 'styled-components';

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: 100px;
  grid-template: auto / auto;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: var(--spacing-15);
  grid-row: 1 / 3;
  grid-column: 2 / 3;
`;

export const Title = styled.p`
  cursor: pointer;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: var(--fSize-11);
  line-height: var(--spacing-18);
  color: var(--color-grayscale-titleActive);
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
`;
export const IconButton = styled.img`
  width: 17px;
  height: 17px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-15);
`;

export const Button = styled.button.attrs({
  type: 'submit'
})`
  /* cursor: pointer; */
  display: flex;
  /* place-items: center; */
  align-items: center;
  gap: 3px;
  padding: 5px 10px;
  background-color: var(--color-iconButton);
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04);
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--fSize-11);
    line-height: var(--spacing-18);
    color: #fcfcfc;
  }

  &:hover {
    filter: contrast(0.9);
  }
`;

export const Tips = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  &:hover {
    filter: saturate(0.6);
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fSize-11);
  line-height: var(--spacing-18);
  color: var(--color-secondary);
`;
