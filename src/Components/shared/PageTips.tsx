import Icon from 'Assets/Icons/Icon';
import React from 'react';
import styled from 'styled-components';
import { IconButton, Text } from 'Themes/utilityThemes';

const Tips = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  &:hover {
    filter: saturate(0.6);
  }
`;

const PageTips = () => {
  return (
    <Tips>

      <Text gap='3px' textColor="var(--color-secondary)">
      <IconButton src={Icon.Tips} />
        Page Tips</Text>
    </Tips>
  );
};

export default PageTips;
