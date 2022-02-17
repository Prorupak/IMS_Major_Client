import Image from 'Assets/Image/Image';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { WDiv } from 'Themes/utilityThemes';

const Testimonial = styled(motion.section).attrs({})`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: -150px;
  width: 400px;

  .client {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 15px 0;
    color: var(--color-header);
  }
`;

const TestimonialHeader = styled(motion.header).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  h4 {
    position: absolute;
    z-index: 999;
    color: var(--color-header);

    background-color: #2c203b !important;
    padding: 5px;
    border-radius: 10px;
  }
  .testHr {
    position: absolute;
    top: -4%;
    height: 1px;
    width: 100%;
    background: #fff;
  }
`;

const TestimonialBody = styled(motion.p).attrs({
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  text-align: center;
  line-height: 2rem;
  color: var(--color-header);
  margin: 20px 0;
`;

const ClientImage = styled(motion.img).attrs({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  width: 70px;
  height: 70px;
`;

const ClientInfo = styled(motion.div).attrs({
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  .client-name {
    font-size: var(--fSize-14);
    font-weight: 600;
  }
`;

const Footer = styled(motion.div).attrs({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;
  flex-flow: column;
  color: var(--color-header);
`;

const FooterHeading = styled(motion.p).attrs({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  font-size: var(--fSize-12);
  text-transform: uppercase;
`;

const FooterItems = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  width: 405px;
  text-align: center;
  line-height: 1;
  font-size: var(--fSize-9);
`;

const FooterItem = styled(motion.p).attrs({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
})`
  cursor: pointer;
`;

const FooterHr = styled(motion.hr).attrs({
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  height: 30px;
`;

const Testimonials = () => {
  return (
    <Testimonial>
      <TestimonialHeader>
        <h4>Testimonials</h4>
        <hr className="testHr" />
      </TestimonialHeader>
      <TestimonialBody>
        Our inventory management system has become much better after using Hamro
        Inventory. We also switched to Hamro Commerce for our accounting
        management for its seamless integration with Hamro Inventory.
      </TestimonialBody>
      <WDiv />
      <section className="client">
        <ClientImage alt="client" src={Image.Profile} />
        <ClientInfo>
          <p className="client-name">John Doe</p>
          <p className="client-details">Managing Director, Kathmandu, Nepal</p>
        </ClientInfo>
      </section>
      <WDiv />
      <Footer>
        <FooterHeading>other extra products</FooterHeading>
        <FooterItems>
          <FooterItem>Hamro Commerce </FooterItem>
          <FooterHr />
          <FooterItem>Hamro Expense </FooterItem>
          <FooterHr />
          <FooterItem>Hamro subscriptions </FooterItem>
        </FooterItems>
      </Footer>
    </Testimonial>
  );
};

export default Testimonials;
