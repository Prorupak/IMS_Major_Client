
import React, { useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TiPlus } from 'react-icons/ti';
import { Icon as Icons, SmallIcon, Text } from 'Themes/utilityThemes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Autocomplete,
  Checkbox,
  Chip,
  FormHelperText,
  TextareaAutosize,
  TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { CategoryContext } from 'context/CategoryContext';
import AddCategories from './AddCategories';
import { Button, Input, notification } from 'antd';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useLocation } from 'react-router';
import { ErrorMessage } from '@hookform/error-message';
import TextArea from 'antd/lib/input/TextArea';
import { ReactHookForm } from 'context/ReactHookForms';

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
  const { register, setMode, setValue, Controller, errors, control, reset, watch, test } = React.useContext(ReactHookForm);
  return (
    <>
      <Grid>
        <Top>
          <ItemWrapper>
            <Text textColor="var(--color-required)" width="20%">
              Name*
            </Text>
            <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

              <Controller
                render={({ field }: any) => (
                  <Input autoComplete='off' status={errors.catName ? "error" : ""} allowClear {...field} style={{ width: "600px" }} />

                )}
                name={"catName"}
                control={control}
                rules={{
                  required: "This is required field.",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "only letters"
                  }
                }}
                defaultValue=""
              />
              <FormHelperText error={errors.catName ? true : false} style={{ marginLeft: "10px" }}>
                <ErrorMessage errors={errors} name="catName" />
              </FormHelperText>
            </div>
          </ItemWrapper>
          <ItemWrapper>
            <Text textColor="var(--color-primary-dark)" width="20%">
              Description
            </Text>
            <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

              <Controller
                render={({ field }: any) => (
                  <TextArea autoComplete='off' status={errors.catDes ? "error" : ""} allowClear {...field} style={{ width: "600px" }} />

                )}
                name="catDes"
                control={control}
                rules={{
                  minLength: {
                    value: 10,
                    message: "minimum length must be 10"
                  }
                }}
                defaultValue=""
              />
              <FormHelperText error={errors.catDes ? true : false} style={{ marginLeft: "10px" }}>
                <ErrorMessage errors={errors} name="catDes" />
              </FormHelperText>
            </div>
          </ItemWrapper>
        </Top>
      </Grid>
    </>
  );
};

export default CategoryForm;










