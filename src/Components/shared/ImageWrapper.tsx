import React from 'react';
import * as Elements from '../../Styles/Elements.ImageWrapper';

const ImageWrapper = () => {
  return (
    <>
      <Elements.ImageWrapper>
        <Elements.LogoWrapper>
          <Elements.LogoText>GreenLife</Elements.LogoText>
        </Elements.LogoWrapper>
        <Elements.ContentsWrapper>
          <Elements.Contents>
            Welcome to
            <br />
            Our Online Shop
          </Elements.Contents>
          <Elements.SubContents>
            Create account and visit the plant house
          </Elements.SubContents>
        </Elements.ContentsWrapper>
        <Elements.ContentsImage />
      </Elements.ImageWrapper>
    </>
  );
};

export default ImageWrapper;
