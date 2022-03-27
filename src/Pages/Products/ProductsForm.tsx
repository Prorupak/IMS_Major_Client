/* eslint-disable quotes */
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
  createFilterOptions,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { CustomSelect, StyledOption } from 'Themes/MaterialUI';

const Wrapper = styled(motion.div).attrs({})`
  position: relative;
  left: 0;
  display: flex;
`;

const Grid = styled(motion.div).attrs({})`
  /* display: grid;
  grid-template-areas:
    'left right'
    'mid mid'
    'bottom bottom';
  grid-template-columns: fit-content auto;
  grid-template-rows: 100% auto; */
  display: flex;
  flex-flow: column;
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

const Middle = styled(motion.div).attrs({})`
  grid-area: mid;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* align-items: center; */
  gap: var(--spacing-20);
  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const SelectWrapper = styled(motion.div).attrs({})`
  /* display: flex; */
  position: absolute;
  right: 7.5px;
`;

const LeftSection = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  gap: var(--spacing-20);
`;

const RightSection = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  gap: var(--spacing-20);
`;

const ItemWrapper = styled(motion.div).attrs({})<{ gap: any }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 10px;
  grid-area: left;
  gap: ${({ gap }) => gap};
`;

const CheckBoxWrapper = styled.div`
  display: flex;

  align-items: center;
  margin: 0 220px;
  .terms-content {
    font-size: var(--fSize-6);
    color: var(--color-placeholder);
  }
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

const filter = createFilterOptions<FilmOptionType>();

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

const top100Films: readonly FilmOptionType[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];
const CategoryForm = ({ postData }: any) => {
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  const [age, setAge] = React.useState('');
  console.log('age', age);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const nameRef = React.useRef({} as HTMLInputElement);
  const desRef = React.useRef({} as HTMLInputElement);
  const skuRef = React.useRef({} as HTMLInputElement);
  const unitRef = React.useRef({} as HTMLInputElement);
  const dimensionRef = React.useRef({} as HTMLInputElement);
  const weightRef = React.useRef({} as HTMLInputElement);
  const manufacturerRef = React.useRef({} as HTMLInputElement);
  const brandRef = React.useRef({} as HTMLInputElement);

  const name = useInput('');
  const [validCategory, setValidCategory] = React.useState(false);

  const sku = useInput('');

  const unit = useInput('');

  const description = useInput('');

  const dimensions = useInput('');
  const dUnit = useInput('');

  console.log('dunit', dUnit.value);
  console.log('dimensions', dimensions.value);

  const weight = useInput('');
  const WUnit = useInput('');
  console.log('wunit', WUnit.value);
  console.log('weight', weight.value);

  const manufacturer = useInput('');

  const brand = useInput('');

  React.useEffect(() => {
    nameRef.current.focus();
    desRef.current.focus();
    skuRef.current.focus();
    unitRef.current.focus();
    dimensionRef.current.focus();
    weightRef.current.focus();
    manufacturerRef.current.focus();
    brandRef.current.focus();
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
          <ItemWrapper gap="30px">
            <Text textColor="var(--color-required)" width="10%">
              Name*
            </Text>
            <TextField
              ref={nameRef}
              {...name.inputAttrs}
              size="small"
              sx={{ width: '600px' }}
              variant="outlined"
            />
          </ItemWrapper>
          <ItemWrapper gap="30px">
            <Text textColor="var(--color-primary-dark)" width="10%">
              Description
            </Text>
            <TextField
              ref={desRef}
              {...description.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              size="small"
              style={{
                width: '600px'
              }}
              variant="outlined"
            />
          </ItemWrapper>
          <ItemWrapper gap="30px">
            <Text textColor="var(--color-primary-dark)" width="10%">
              SKU
            </Text>
            <TextField
              ref={skuRef}
              {...sku.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              size="small"
              style={{
                width: '600px'
              }}
              variant="outlined"
            />
          </ItemWrapper>
          <ItemWrapper gap="30px">
            <Text textColor="var(--color-required)" width="10%">
              Unit*
            </Text>
            <TextField
              ref={unitRef}
              {...unit.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              size="small"
              style={{
                width: '600px'
              }}
              variant="outlined"
            />
          </ItemWrapper>
          <CheckBoxWrapper>
            <Checkbox
              aria-describedby="cNote"
              onChange={(e: any) => {
                setChecked(!checked);
              }}
              size="small"
              value={checked}
            />
            <p className="terms-content">Returnable Item</p>
          </CheckBoxWrapper>
        </Top>
        <Middle>
          <LeftSection>
            <Wrapper>
              <ItemWrapper gap="70px">
                <Text textColor="var(--color-primary-dark)" width="10%">
                  Dimensions
                </Text>
                <TextField
                  ref={dimensionRef}
                  {...dimensions.inputAttrs}
                  size="small"
                  sx={{ width: '300px' }}
                  variant="outlined"
                />
                <SelectWrapper style={{ right: '38px' }}>
                  <CustomSelect onChange={dUnit.setValue} value={dUnit.value}>
                    <StyledOption value="inch">inch</StyledOption>
                    <StyledOption value="cm">cm</StyledOption>
                  </CustomSelect>
                </SelectWrapper>
              </ItemWrapper>
            </Wrapper>
            <ItemWrapper gap="70px">
              <Text textColor="var(--color-primary-dark)" width="10%">
                Manufacturer
              </Text>
              <Autocomplete
                ref={manufacturerRef}
                clearOnBlur
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`
                    });
                  }

                  return filtered;
                }}
                freeSolo
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                options={top100Films}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                selectOnFocus
                sx={{ width: 300 }}
                value={value}
              />
            </ItemWrapper>
          </LeftSection>
          <RightSection>
            <Wrapper>
              <ItemWrapper gap="70px">
                <Text textColor="var(--color-primary-dark)" width="10%">
                  Weight
                </Text>
                <TextField
                  ref={weightRef}
                  {...weight.inputAttrs}
                  size="small"
                  sx={{ width: '300px' }}
                  variant="outlined"
                />
                <SelectWrapper>
                  <CustomSelect onChange={WUnit.setValue} value={WUnit.value}>
                    <StyledOption value="kg">kg</StyledOption>
                    <StyledOption value="gm">gm</StyledOption>
                  </CustomSelect>
                </SelectWrapper>
              </ItemWrapper>
            </Wrapper>
            <ItemWrapper gap="70px">
              <Text textColor="var(--color-primary-dark)" width="10%">
                Brand
              </Text>
              <Autocomplete
                ref={brandRef}
                clearOnBlur
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`
                    });
                  }

                  return filtered;
                }}
                freeSolo
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                options={top100Films}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                selectOnFocus
                sx={{ width: 300 }}
                value={value}
              />
            </ItemWrapper>
          </RightSection>
        </Middle>
      </Grid>
    </>
  );
};

export default CategoryForm;
