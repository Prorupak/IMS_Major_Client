import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const QuickCreate = styled.div`
  position: relative;
  /* left:252px; */
  width: max-content;
  padding: 30px 20px;
`;

export const QuickCreateWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Title = styled.p`
  display: flex;
  gap: var(--spacing-15);
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #7c7c7c;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
  gap: 10px;
`;

export const Icon = styled.img``;

export const Content = styled(NavLink).attrs({

})`
  color: ${(props) => {
    return props.theme.color.textSecondary;
  }};

  .active {
    color: Blue;
  }

  display: flex;
  gap: 10px;
`;

export const Contents = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* QUICK-LIST */

  color: #555555;
`;
