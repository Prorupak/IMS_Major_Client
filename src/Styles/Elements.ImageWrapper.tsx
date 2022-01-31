import styled from 'styled-components';
import Images from '../Assets/Image/Image';

export const ImageWrapper = styled.div`
  /* position: relative */
  padding: 25px 0 0 30px;
  height: 100vh;
  width: 40.88vw;
  background: #7cc89e;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({
  src: Images.logo,
  alt: 'logo'
})``;

export const Logo = styled.img.attrs({
  src: `${Images.logo}`,
  alt: 'logo'
})`
  font-size: 1.5rem;
`;

export const LogoText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 41px;
  color: #fff;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 85px 0 0 0;
`;

export const Contents = styled.p`
  width: 383px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 50px;
  color: #fcfcfc;
`;
export const SubContents = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #fcfcfc;
`;

export const ContentsImage = styled.img.attrs({
  src: Images.green,
  alt: 'green'
})`
  position: absolute;
  //responsive for mobile
  @media (max-width: 768px) {
    display: none;
  }
`;
