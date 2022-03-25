import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled(motion.header).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
})`
  display: flex;
`;

const Sign = styled(motion.p).attrs({
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.9 }
})`
  cursor: pointer;
  color: var(--color-secondary);
`;
const Heading = () => {
  return (
    <Header>
      <p className="header-content">Already have a Hamro account? </p>
      &nbsp;
      <NavLink to="/login">
        <Sign>Sign in</Sign>
      </NavLink>
    </Header>
  );
};

export default Heading;
