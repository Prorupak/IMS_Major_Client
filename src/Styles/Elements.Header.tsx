import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icons from '../Assets/Icons/Icon';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 50px;
  color: #000000;
`;

export const HeaderContent = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;

  .signIn {
    color: #7cc89e;
  }
`;

export const A = styled(Link).attrs({
  to: '/login'
})`
  color: green;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const GoogleIcon = styled.img.attrs({
  alt: 'google',
  src: `${Icons.GoogleIc}`
})`
  display: flex;
`;

export const Google = styled.div`
  display: flex;
  align-items: center;
`;

export const Facebook = styled.div`
  display: flex;
  align-items: center;
`;

export const IconFacebook = styled.img.attrs({
  alt: 'facebook',
  src: Icons.FaceIc
})`
  display: flex;
`;

export const SocialText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 41px;
  color: #000000;
`;

export const Separator = styled.p`
  margin: 20px 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 1px;

  color: #000000;
`;
