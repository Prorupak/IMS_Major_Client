import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const QuickCreate = styled.div`
  position: relative;
left:252px;
  width: max-content;
  padding: 30px 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
`;

export const QuickCreateWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Title = styled.p`
  display: flex;
  gap: 15px;
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
  activeClassName: 'active'
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
