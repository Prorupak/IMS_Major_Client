import React from 'react';
import Image from 'Assets/Image/Image';
import { motion } from 'framer-motion';
import { useDocumentTitle } from 'Hooks';
import styled from 'styled-components';
import Testimonials from './Testimonials';
import Heading from './Header';
import Form from './Form';

/**
 * @framerMotion is a library that helps us to animate our components
 * @motion is a function that helps us to animate our components
 * @useDocumentTitle is a hook that helps us to set the title of the page.
 * @Image is a component that helps us to import our image.
 * @styled is a function that helps us to style our components.
 * @attrs is a function that helps us to set the attributes of our components.
 * @Testimonials is a component that helps us to import our testimonials.
 */

const Grid = styled(motion.section).attrs({})`
  overflow: hidden;
  margin: 0 280px;
  display: grid;
  grid-template-areas:
    'nav header'
    'nav article';
  grid-template-rows: 60px auto;
  grid-template-columns: 550px auto;
  grid-row-gap: 10px;
  height: 100vh;
`;

const Hero = styled(motion.nav).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: nav;

  background: url(${Image.HeroImage}) no-repeat center;
  background-size: cover;
`;

const Header = styled(motion.header).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  display: flex;
  align-items: center;
  justify-content: end;
  grid-area: header;
  background-color: #fff;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.04);
`;

const Main = styled(motion.article).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  display: grid;
  justify-content: center;
  grid-area: article;
  background-color: #fff;
`;

const Register: React.FC = () => {
  useDocumentTitle('Start your free trial(14 days)');
  return (
    <>
      <Grid>
        <Hero>
          <Testimonials />
        </Hero>
        <Header>
          <Heading />
        </Header>
        <Main>
          <Form />
        </Main>
      </Grid>
    </>
  );
};

export default Register;
