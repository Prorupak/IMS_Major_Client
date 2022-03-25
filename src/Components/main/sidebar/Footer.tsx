import React from 'react';
import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Wrapper = styled.div`
  cursor: pointer;
`;

interface Props {
  toggleHandle: (action: string) => void;
  toggle: boolean;
}

const Footer: React.FC<Props> = ({ toggleHandle, toggle }: any) => {
  console.log('value===', toggle);
  return (
    <>
      <Wrapper>
        {toggle ? (
          <FaAngleDoubleLeft color="#fff" onClick={toggleHandle} size={24} />
        ) : (
          <FaAngleDoubleRight color="#fff" onClick={toggleHandle} size={24} />
        )}
      </Wrapper>
    </>
  );
};

export default Footer;
