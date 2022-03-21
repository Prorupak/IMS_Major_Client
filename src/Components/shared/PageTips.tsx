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
      <IconButton src={Icon.Tips} />
      <Text textColor="var(--color-secondary)">Page Tips</Text>
    </Tips>
  );
};

export default PageTips;
