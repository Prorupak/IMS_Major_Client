import styled from 'styled-components';

export const Item = styled.p`
  margin: 8px 0;
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: var(--fSize-10);
  line-height: var(--spacing-18);
  color: var(--color-primary-dark);
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.07);
  margin: 5px 0;
`;
export const Heading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: var(--fSize-14);
  line-height: var(--spacing-20);
  color: var(--color-primary-dark);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
