import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Item = styled.p<{
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  margin: 8px 0;
  height: ${({ height }) => height || '0%'};
  text-transform: capitalize;
  font-family: 'Poppins', 'sans-serif';
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-size: ${({ fontSize }) => fontSize || 'var(--fSize-5)'};
  line-height: var(--spacing-18);
  color: var(--color-primary-dark);
`;

export const Title = styled.p`
  cursor: pointer;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: var(--fSize-13);
  line-height: var(--spacing-18);
  color: var(--color-grayscale-titleActive);
`;

export const Text = styled.legend<{
  textColor?: string;
  width?: string;
  gap?: string;
}>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || '0'};
  font-style: normal;
  font-weight: normal;
  font-size: var(--fSize-8);
  line-height: var(--spacing-18);
  width: ${({ width }) => width};
  color: ${({ textColor }) => textColor};
`;

export const Divider = styled.div`
  width: 100%;
  height: var(--spacing-05);
  background-color: rgba(0, 0, 0, 0.07);
  margin: var(--spacing-5) 0;
`;
export const WDiv = styled.hr`
  width: 100%;
  height: var(--spacing-05);
  background-color: rgb(255, 255, 255);
  margin: 5px 0;
`;
export const Heading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: var(--fSize-14);
  line-height: var(--spacing-20);
  color: var(--color-primary-dark);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputIcon = styled(motion.img).attrs({})`
  height: 16px;
  width: 16px;
`;

export const Error = styled.p`
  color: red;
  font-size: var(--fSize-7);
  font-weight: 600;
  text-align: left;
`;

export const Button = styled.button.attrs({
  type: 'submit'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 4px 8px;
  background-color: var(--color-iconButton);
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04);
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: var(--fSize-7);
  color: #fcfcfc;
  p {
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: var(--fSize-7);
    color: #fcfcfc;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: var(--fSize-7);
    line-height: var(--spacing-18);
    color: var(--color-primary-dark);
  }

  &:hover {
    filter: contrast(0.9);
  }
`;

export const Icon = styled(motion.img).attrs({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  stiffness: 2000
})`
  cursor: pointer;
  width: 14px;
  height: 14px;
`;
export const IconButton = styled.img`
  min-width: 14px;
  min-height: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-15);
`;

export const SmallIcon = styled(motion.img).attrs<{ color?: string }>({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
})`
  cursor: pointer;
  fill: ${({ color }) => color};
  // change color of icon
  width: 14px;
  height: 14px;
`;
















