/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-object-spread */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { TiPlus } from 'react-icons/ti';
import { Icon as Icons, SmallIcon, Text } from 'Themes/utilityThemes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Autocomplete,
  Checkbox,
  Chip,
  TextareaAutosize,
  TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { CategoryContext } from 'context/CategoryContext';
import AddCategories from './AddCategories';

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content auto;
  grid-template-rows: 100% auto;
  .image {
    grid-area: right;
  }
`;

const Top = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  gap: var(--spacing-20);

  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const ItemWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  min-height: 10px;
  grid-area: left;
  gap: 100px;
`;

const Error = styled(motion.div)<{ error: any }>`
  display: ${({ error }) => (error ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 20%;
  padding: var(--spacing-10);
  margin: 0 var(--spacing-5);
  max-width: 50%;
  height: fit-content;
  max-height: 300px;
  background: var(--color-error-back);
`;

const CategoryForm = () => {
  const { postData } = React.useContext(CategoryContext);

  const catRef = React.useRef({} as HTMLInputElement);
  const desRef = React.useRef({} as HTMLInputElement);

  const category = useInput('');
  const [validCategory, setValidCategory] = React.useState(false);

  const description = useInput('');

  React.useEffect(() => {
    catRef.current.focus();
    desRef.current.focus();
  }, []);

  const [error, setError] = React.useState(false);

  const Cdata = {
    name: category.value,
    description: description.value
  };

  React.useEffect(() => {
    postData(Cdata);
  }, [category.value, description.value]);

  return (
    <>
      <Grid>
        {error ? (
          <Error error={error}>
            <p>error</p>
            <Icons
              onClick={() => setError(!error)}
              src={Icon.Close}
              style={{ height: '10px', width: '10px' }}
            />
          </Error>
        ) : null}
        <Top>
          <ItemWrapper>
            <Text textColor="var(--color-required)" width="10%">
              Category Name*
            </Text>
            <TextField
              ref={catRef}
              label={null}
              {...category.inputAttrs}
              size="small"
              sx={{ width: '820px' }}
              variant="standard"
            />
          </ItemWrapper>
          <ItemWrapper>
            <Text textColor="var(--color-primary-dark)" width="10%">
              Description
            </Text>
            <TextField
              ref={desRef}
              label={null}
              {...description.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              style={{
                width: '820px'
              }}
              variant="standard"
            />
          </ItemWrapper>
        </Top>
      </Grid>
    </>
  );
};

export default CategoryForm;










