import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  min-width: 100%;
  min-height: var(--spacing-37);
  background-color: var(--color-header);
  font-size: var(--fSize-11);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0 var(--spacing-5) 0 var(--spacing-15);
`;

export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: var(--spacing-5) 15px;
`;

export const Item = styled.p`
  padding: var(--spacing-5);
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: var(--fSize-10);
  line-height: var(--spacing-18);
  color: var(--color-primary-dark);
  text-transform: capitalize;
`;

export const Icon = styled.img`
  height: 17px;
  width: 17px;
`;
