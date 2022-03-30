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
  Divider,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { CustomSelect, StyledOption } from 'Themes/MaterialUI';
import useFetch from 'Hooks/useFetch';
import { IProductsDetails } from 'Interfaces/Interfaces';

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
  gap: var(--spacing-10);

  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const Middle = styled(motion.div).attrs({})`
  grid-area: mid;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* align-items: center; */
  margin-top: var(--spacing-20);
  gap: var(--spacing-10);
  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const Bottom = styled(motion.div).attrs({})`
  grid-area: bottom;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* align-items: center; */
  margin-top: var(--spacing-20);

  gap: var(--spacing-10);
  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const SelectWrapper = styled(motion.div).attrs({})`
  /* display: flex; */
  position: absolute;
  right: 0.5px;
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
  margin: 0 235px;
  .terms-content {
    font-size: var(--fSize-8);
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

const CategoryForm = ({ postData }: any) => {
  const [returnable, setReturnable] = React.useState(false);
  const [sales, setSales] = React.useState(true);
  const [purchase, setPurchase] = React.useState(true);
  const [value, setValue] = React.useState<IProductsDetails | null | undefined>(
    null
  );

  const { data } = useFetch('http://localhost:9001/api/products');
  console.log('data', data);

  const brandName: readonly any[] = data.map((item: any) => item.brand);
  const manuName: readonly any[] = data.map((item: any) => item.manufacturer);
  // setValue(brandName);

  const filteredBrand = brandName.filter((item: any) => item !== undefined);
  const filteredManu = brandName.filter((item: any) => item !== undefined);
  console.log('data', filteredBrand);

  // setValue(brand as typeof brandName);

  const nameRef = React.useRef({} as HTMLInputElement);
  const desRef = React.useRef({} as HTMLInputElement);
  const skuRef = React.useRef({} as HTMLInputElement);
  const unitRef = React.useRef({} as HTMLInputElement);
  const dimensionRef = React.useRef({} as HTMLInputElement);
  const weightRef = React.useRef({} as HTMLInputElement);
  const manufacturerRef = React.useRef({} as HTMLInputElement);
  const brandRef = React.useRef({} as HTMLInputElement);
  const sellingPriceRef = React.useRef({} as HTMLInputElement);
  const sellAccountRef = React.useRef({} as HTMLInputElement);
  const sellDescriptionRef = React.useRef({} as HTMLInputElement);
  const sellTaxRef = React.useRef({} as HTMLInputElement);
  const costPriceRef = React.useRef({} as HTMLInputElement);
  const costAccountRef = React.useRef({} as HTMLInputElement);
  const costDescriptionRef = React.useRef({} as HTMLInputElement);
  const costTaxRef = React.useRef({} as HTMLInputElement);
  const openingStockRef = React.useRef({} as HTMLInputElement);
  const reorderRef = React.useRef({} as HTMLInputElement);
  const stockPerUnitRef = React.useRef({} as HTMLInputElement);
  const preferredVendorRef = React.useRef({} as HTMLInputElement);

  const name = useInput('');
  const [validCategory, setValidCategory] = React.useState(false);

  const sku = useInput('');

  const unit = useInput('');

  const description = useInput('');

  const dimensions = useInput('');
  const dUnit = useInput('');

  const weight = useInput('');
  const WUnit = useInput('');

  const manufacturer = useInput('');

  const brand = useInput('');

  const sellingPrice = useInput('');

  const sellAccount = useInput('');

  const sellDescription = useInput('');

  const sellTax = useInput('');

  const costPrice = useInput('');

  const costAccount = useInput('');

  const costDescription = useInput('');

  const costTax = useInput('');

  const openingStock = useInput('');

  const reorder = useInput('');

  const stockPerUnit = useInput('');

  const preferredVendor = useInput('');

  React.useEffect(() => {
    nameRef.current.focus();
    desRef.current.focus();
    skuRef.current.focus();
    unitRef.current.focus();
    dimensionRef.current.focus();
    weightRef.current.focus();
    manufacturerRef.current.focus();
    brandRef.current.focus();
    sellingPriceRef.current.focus();
    // sellAccountRef.current.focus();
    sellDescriptionRef.current.focus();
    sellTaxRef.current.focus();
    costPriceRef.current.focus();
    // costAccountRef.current.focus();
    costDescriptionRef.current.focus();
    costTaxRef.current.focus();
    // openingStockRef.current.focus();
    // reorderRef.current.focus();
    // stockPerUnitRef.current.focus();
    // preferredVendorRef.current.focus();
  }, []);

  const [error, setError] = React.useState(false);
  const Cdata = {
    name: name.value,
    description: description.value,
    sku: sku.value,
    unit: unit.value,
    brand: brand.value.title,
    manufacturer: manufacturer.value.title,
    dimensions: dimensions.value,
    dUnit: dUnit.value,
    weight: weight.value,
    wUnit: WUnit.value,
    sellingPrice: sellingPrice.value,
    // saleAccount: sellAccount.value.title,
    sellDescription: sellDescription.value,
    sellTax: sellTax.value.title,
    costPrice: costPrice.value,
    // costAccount: costAccount.value.title,
    costDescription: costDescription.value,
    costTax: costTax.value.title
  };

  React.useEffect(() => {
    postData(Cdata);
  }, [
    name.value,
    description.value,
    sku.value,
    unit.value,
    brand.value.title,
    manufacturer.value.title,
    dimensions.value,
    dUnit.value,
    weight.value,
    WUnit.value,
    sellingPrice.value,
    // sellAccount.value.title,
    sellDescription.value,
    sellTax.value.title,
    costPrice.value,
    // costAccount.value.title,
    costDescription.value.title,
    costTax.value
  ]);

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
            <Text textColor="var(--color-required)" width="20%">
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
            <Text textColor="var(--color-primary-dark)" width="20%">
              Description
            </Text>
            <TextareaAutosize
              // @ts-ignore
              ref={desRef}
              {...description.inputAttrs}
              aria-label="minimum height"
              minRows={3}
              style={{ width: 600 }}
            />
          </ItemWrapper>
          <ItemWrapper gap="30px">
            <Text textColor="var(--color-primary-dark)" width="20%">
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
            <Text textColor="var(--color-required)" width="20%">
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
                setReturnable(!returnable);
              }}
              size="small"
              value={returnable}
            />
            <p className="terms-content">Returnable Item</p>
          </CheckBoxWrapper>
        </Top>
        <Divider />
        <Middle>
          <LeftSection>
            <Wrapper>
              <ItemWrapper gap="100px">
                <Text textColor="var(--color-primary-dark)" width="20%">
                  Dimensions
                </Text>
                <TextField
                  ref={dimensionRef}
                  {...dimensions.inputAttrs}
                  size="small"
                  sx={{ width: '300px' }}
                  variant="outlined"
                />
                <SelectWrapper style={{ right: '1px' }}>
                  <CustomSelect onChange={dUnit.setValue} value={dUnit.value}>
                    <StyledOption value="inch">inch</StyledOption>
                    <StyledOption value="cm">cm</StyledOption>
                  </CustomSelect>
                </SelectWrapper>
              </ItemWrapper>
            </Wrapper>
            <ItemWrapper gap="100px">
              <Text textColor="var(--color-primary-dark)" width="20%">
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
                  return manufacturer.value.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    manufacturer.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    manufacturer.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    manufacturer.setValue(newValue);
                  }
                }}
                options={filteredManu}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('manOpt', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={manufacturer.value.title}
              />
            </ItemWrapper>
          </LeftSection>
          <RightSection>
            <Wrapper>
              <ItemWrapper gap="70px">
                <Text textColor="var(--color-primary-dark)" width="20%">
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
              <Text textColor="var(--color-primary-dark)" width="20%">
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
                    brand.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    brand.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    brand.setValue(newValue);
                    console.log('new', newValue);
                  }
                }}
                options={filteredBrand}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('option', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={brand.value.title}
              />
            </ItemWrapper>
          </RightSection>
        </Middle>
        <Divider
          sx={{
            margin: '20px 0px'
          }}
        />
        <Bottom>
          <LeftSection>
            <CheckBoxWrapper
              style={{
                margin: '0'
              }}>
              <Checkbox
                aria-describedby="cNote"
                checked={sales}
                onChange={(e: any) => {
                  setSales(!sales);
                }}
                size="small"
                value={sales}
              />
              <p
                className="terms-content"
                style={{
                  fontSize: '16px'
                }}>
                Sales Information
              </p>
            </CheckBoxWrapper>
            <Wrapper>
              <ItemWrapper gap="100px">
                <Text textColor="var(--color-required)" width="20%">
                  Selling Price*
                </Text>
                <TextField
                  ref={sellingPriceRef}
                  disabled={!sales}
                  {...sellingPrice.inputAttrs}
                  size="small"
                  sx={{ width: '300px' }}
                  variant="outlined"
                />
              </ItemWrapper>
            </Wrapper>
            {/* <ItemWrapper gap="100px">
              <Text textColor="var(--color-required)" width="20%">
                Account*
              </Text>
              <Autocomplete
                ref={sellAccountRef}
                clearOnBlur
                disabled={!sales}
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
                  return sellAccount.value.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    sellAccount.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    sellAccount.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    sellAccount.setValue(newValue);
                  }
                }}
                options={filteredManu}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('manOpt', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={sellAccount.value.title}
              />
            </ItemWrapper> */}
            <ItemWrapper gap="100px">
              <Text textColor="var(--color-primary-dark)" width="20%">
                Description
              </Text>
              <TextareaAutosize
                // @ts-ignore
                ref={sellDescriptionRef}
                disabled={!sales}
                {...sellDescription.inputAttrs}
                aria-label="minimum height"
                minRows={3}
                style={{ width: 300 }}
              />
            </ItemWrapper>
            <ItemWrapper gap="100px">
              <Text textColor="var(--color-primary-dark)" width="20%">
                Tax
              </Text>
              <Autocomplete
                ref={sellTaxRef}
                clearOnBlur
                disabled={!sales}
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
                  return sellTax.value.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    sellTax.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    sellTax.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    sellTax.setValue(newValue);
                  }
                }}
                options={filteredManu}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('manOpt', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={sellTax.value.title}
              />
            </ItemWrapper>
          </LeftSection>
          <RightSection>
            <CheckBoxWrapper
              style={{
                margin: '0'
              }}>
              <Checkbox
                aria-describedby="cNote"
                checked={purchase}
                onChange={(e: any) => {
                  setPurchase(!purchase);
                }}
                size="small"
                value={purchase}
              />
              <p
                className="terms-content"
                style={{
                  fontSize: '16px'
                }}>
                Purchase Information
              </p>
            </CheckBoxWrapper>
            <Wrapper>
              <ItemWrapper gap="70px">
                <Text textColor="var(--color-required)" width="20%">
                  Cost Price*
                </Text>
                <TextField
                  ref={costPriceRef}
                  disabled={!purchase}
                  {...costPrice.inputAttrs}
                  size="small"
                  sx={{ width: '300px' }}
                  variant="outlined"
                />
              </ItemWrapper>
            </Wrapper>
            {/* <ItemWrapper gap="70px">
              <Text textColor="var(--color-required)" width="20%">
                Account*
              </Text>
              <Autocomplete
                ref={costAccountRef}
                clearOnBlur
                disabled={!purchase}
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
                    costAccount.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    costAccount.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    costAccount.setValue(newValue);
                    console.log('new', newValue);
                  }
                }}
                options={filteredManu}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('option', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={costAccount.value.title}
              />
            </ItemWrapper> */}
            <ItemWrapper gap="70px">
              <Text textColor="var(--color-primary-dark)" width="20%">
                Description
              </Text>
              <TextareaAutosize
                // @ts-ignore
                ref={costDescriptionRef}
                disabled={!purchase}
                {...costDescription.inputAttrs}
                aria-label="minimum height"
                minRows={3}
                style={{ width: 300 }}
              />
            </ItemWrapper>
            <ItemWrapper gap="70px">
              <Text textColor="var(--color-primary-dark)" width="20%">
                Tax
              </Text>
              <Autocomplete
                ref={costTaxRef}
                clearOnBlur
                disabled={!purchase}
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
                  return costTax.value.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    costTax.setValue({
                      title: newValue
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    costTax.setValue({
                      title: newValue.inputValue
                    });
                  } else {
                    costTax.setValue(newValue);
                  }
                }}
                options={filteredManu}
                renderInput={(params) => <TextField {...params} size="small" />}
                renderOption={(props, option) => {
                  console.log('manOpt', option);
                  return <li {...props}>{option?.title ?? option}</li>;
                }}
                selectOnFocus
                sx={{ width: 300 }}
                value={costTax.value.title}
              />
            </ItemWrapper>
          </RightSection>
        </Bottom>
      </Grid>
    </>
  );
};

export default CategoryForm;


