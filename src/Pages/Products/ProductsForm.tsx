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

const CategoryForm = ({ postData }: any) => {
  const nameRef = React.useRef({} as HTMLInputElement);
  const desRef = React.useRef({} as HTMLInputElement);
  const skuRef = React.useRef({} as HTMLInputElement);
  const unitRef = React.useRef({} as HTMLInputElement);

  const name = useInput('');
  const [validCategory, setValidCategory] = React.useState(false);

  const sku = useInput('');

  const unit = useInput('');

  const description = useInput('');

  React.useEffect(() => {
    nameRef.current.focus();
    desRef.current.focus();
    skuRef.current.focus();
    unitRef.current.focus();
  }, []);

  const [error, setError] = React.useState(false);
  const Cdata = {
    name: name.value,
    description: description.value,
    sku: sku.value,
    unit: unit.value
  };

  React.useEffect(() => {
    postData(Cdata);
  }, [name.value, description.value, sku.value, unit.value]);

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
              Name*
            </Text>
            <TextField
              ref={nameRef}
              {...name.inputAttrs}
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
              {...description.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              style={{
                width: '820px'
              }}
              variant="standard"
            />
          </ItemWrapper>
          <ItemWrapper>
            <Text textColor="var(--color-primary-dark)" width="10%">
              SKU
            </Text>
            <TextField
              ref={skuRef}
              {...sku.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              style={{
                width: '820px'
              }}
              variant="standard"
            />
          </ItemWrapper>
          <ItemWrapper>
            <Text textColor="var(--color-required)" width="10%">
              Unit*
            </Text>
            <TextField
              ref={unitRef}
              {...unit.inputAttrs}
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
