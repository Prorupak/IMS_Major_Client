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
