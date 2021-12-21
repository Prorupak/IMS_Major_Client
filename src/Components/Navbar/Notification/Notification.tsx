import React from 'react';
import * as Elements from './Elements.Notification';
import Icons from '../../../Assets/Icons/Icon';

const Notification = () => {
  return (
    <>
      <Elements.MainWrapper>
        <Elements.Wrapper>
          <Elements.HeaderSection>
            <Elements.Header>
              <Elements.Title>Notification</Elements.Title>
              <Elements.Title>Announcements</Elements.Title>
              <Elements.Icon alt="close" src={Icons.Close} />
            </Elements.Header>
          </Elements.HeaderSection>
        </Elements.Wrapper>
      </Elements.MainWrapper>
    </>
  );
};

export default Notification;
