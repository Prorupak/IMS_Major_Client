import React from "react";
import { BsTrash } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { Icon as Icons, Item, SmallIcon, Text } from "Themes/utilityThemes";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
     Autocomplete,
     Checkbox,
     Chip,
     createFilterOptions,
     Divider,
     FormControl,
     InputLabel,
     ListSubheader,
     MenuItem,
     Select,
     TextareaAutosize,
     TextField,
} from "@mui/material";

import { useInput } from "Hooks/useInput";
import Icon from "Assets/Icons/Icon";
import { CustomSelect, StyledOption, TooltipMui } from "Themes/MaterialUI";
import useFetch from "Hooks/useFetch";
import { IProductsDetails } from "Interfaces/Interfaces";
import { ProductContext, ProductData } from "context/ProductContext";
import { useParams } from "react-router";
import { useForm } from "react-hook-form"

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
 margin-top: var(--spacing-20);

 gap: var(--spacing-10);
 padding: var(--spacing-15);
 padding-right: var(--spacing-40);
`;

const Track = styled(motion.div).attrs({})`
 grid-area: bottom;
 display: flex;
 /* flex-flow: column; */
 justify-content: space-between;
 width: 100%;
 margin-top: var(--spacing-20);
 gap: 140px;
 padding: var(--spacing-15);
 /* padding-right: var(--spacing-40); */
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

const ItemWrapper = styled(motion.div).attrs({}) <{ gap: any }>`
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

const Error = styled(motion.div) <{ error: any }>`
 display: ${({ error }) => (error ? "flex" : "none")};
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

const UpdateProducts = () => {
     const [returnable, setReturnable] = React.useState(false);
     const [sales, setSales] = React.useState(true);
     const [purchase, setPurchase] = React.useState(true);

     const { updateData } = React.useContext(ProductContext)
     const { productDetails: product } = React.useContext(ProductData)
     console.log('product', product)

     const { register, handleSubmit, setValue } = useForm({
          // defaultValues: {
          //      name: product.name,
          // }
     });

     React.useEffect(() => {
          // setValue("name", product.name)
     }, [product])

     // console.log('pro', product.name)

     const { id } = useParams()

     const { data } = useFetch("http://localhost:9001/api/products");
     console.log("data", data);

     const brandName: readonly any[] = data.map((item: any) => item.brand);
     const manuName: readonly any[] = data.map((item: any) => item.manufacturer);
     // setValue(brandName);

     const filteredBrand = brandName.filter((item: any) => item !== undefined);
     const filteredManu = brandName.filter((item: any) => item !== undefined);
     console.log("data", filteredBrand);

     const name = useInput("");
     const [validCategory, setValidCategory] = React.useState(false);

     const sku = useInput("");

     const unit = useInput("");

     const description = useInput("");

     const dimensions = useInput("");
     const dUnit = useInput("");

     const weight = useInput("");
     const WUnit = useInput("");

     const manufacturer = useInput("");

     const brand = useInput("");

     const sellingPrice = useInput("");

     const sellAccount = useInput("");

     const sellDescription = useInput("");

     const sellTax = useInput("");

     const costPrice = useInput("");

     const costAccount = useInput("");

     const costDescription = useInput("");

     const costTax = useInput("");

     const openingStock = useInput("");

     const reorder = useInput("");

     const stockPerUnit = useInput("");

     const preferredVendor = useInput("");

     const inventoryAccnt = useInput("");
     console.log("inventoryAccnt", inventoryAccnt.value);

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
          saleAccount: sellAccount.value.title,
          sellDescription: sellDescription.value,
          sellTax: sellTax.value.title,
          costPrice: costPrice.value,
          costAccount: costAccount.value.title,
          costDescription: costDescription.value,
          costTax: costTax.value.title,
          inventoryAccount: inventoryAccnt.value,
          openingStock: openingStock.value,
          reorder: reorder.value,
          stockPerUnit: stockPerUnit.value,
          preferredVendor: preferredVendor.value,
          id
     };

     console.log("Cdata", Cdata.openingStock);

     React.useEffect(() => {
          updateData(Cdata);
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
          costDescription.value,
          costTax.value.title,
          inventoryAccnt.value,
          openingStock.value,
          reorder.value,
          stockPerUnit.value,
          preferredVendor.value,
          id

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
                                   style={{ height: "10px", width: "10px" }}
                              />
                         </Error>
                    ) : null}
                    <Top>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-required)" width="20%">
                                   Name*
                              </Text>
                              <TextField
                                   {...register('name')}
                                   label={null}
                                   size="small"
                                   sx={{ width: "600px" }}
                                   variant="outlined"
                              />
                         </ItemWrapper>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   Description
                              </Text>
                              <TextareaAutosize
                                   // {...register('description')}
                                   name="description"
                                   aria-label="minimum height"
                                   minRows={3}
                                   style={{ width: 600 }}
                              />
                         </ItemWrapper>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   SKU
                                   <TooltipMui title="The Stock Keeping Unit of the item.">
                                        <Icons
                                             src={Icon.Faq}
                                             style={{
                                                  marginLeft: "5px",
                                             }}
                                        />
                                   </TooltipMui>
                              </Text>
                              <TextField
                                   name="sku"
                                   label={null}
                                   {...sku.inputAttrs}
                                   aria-label="minimum height"
                                   minRows={2}
                                   size="small"
                                   style={{
                                        width: "600px",
                                   }}
                                   variant="outlined"
                              />
                         </ItemWrapper>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-required)" width="20%">
                                   Unit*
                                   <TooltipMui title="The product will be measured in terms of this unit (e.g.: Kg, dozen)">
                                        <Icons
                                             src={Icon.Faq}
                                             style={{
                                                  marginLeft: "5px",
                                             }}
                                        />
                                   </TooltipMui>
                              </Text>
                              <TextField
                                   name="unit"
                                   label={null}
                                   {...unit.inputAttrs}
                                   aria-label="minimum height"
                                   minRows={2}
                                   size="small"
                                   style={{
                                        width: "600px",
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
                                             name="dimensions"
                                             label={null}
                                             {...dimensions.inputAttrs}
                                             size="small"
                                             sx={{ width: "300px" }}
                                             variant="outlined"
                                        />
                                        <SelectWrapper style={{ right: "1px" }}>
                                             <CustomSelect
                                                  onChange={dUnit.setValue} value={dUnit.value}>
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
                                        clearOnBlur
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  manufacturer.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  manufacturer.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  manufacturer.setValue(newValue);
                                             }
                                        }}
                                        options={filteredManu}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="manufacturer"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
                                             console.log("manOpt", option);
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
                                             name="weight"
                                             label={null}
                                             {...weight.inputAttrs}
                                             size="small"
                                             sx={{ width: "300px" }}
                                             variant="outlined"
                                        />
                                        <SelectWrapper>
                                             <CustomSelect
                                                  onChange={WUnit.setValue} value={WUnit.value}>
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
                                        clearOnBlur
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  brand.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  brand.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  brand.setValue(newValue);
                                                  console.log("new", newValue);
                                             }
                                        }}
                                        options={filteredBrand}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="brand"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
                                             console.log("option", option);
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
                              margin: "20px 0px",
                         }}
                    />
                    <Bottom>
                         <LeftSection>
                              <CheckBoxWrapper
                                   style={{
                                        margin: "0",
                                   }}
                              >
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
                                             fontSize: "16px",
                                        }}
                                   >
                                        Sales Information
                                   </p>
                              </CheckBoxWrapper>
                              <Wrapper>
                                   <ItemWrapper gap="100px">
                                        <TooltipMui title="The rate at which you're going to sell this product.">
                                             <Item
                                                  color="var(--color-required)"
                                                  fontSize="12px"
                                                  fontWeight="medium"
                                                  height="47%"
                                                  margin="-2px 0"
                                                  style={{
                                                       borderBottom: "1px dashed #969696",
                                                       paddingBottom: "2px",
                                                  }}
                                                  width="fit-content"
                                             >
                                                  Selling Price*
                                             </Item>
                                        </TooltipMui>
                                        <TextField
                                             name="sellingPrice"
                                             disabled={!sales}
                                             label={null}
                                             {...sellingPrice.inputAttrs}
                                             size="small"
                                             sx={{ width: "300px" }}
                                             variant="outlined"
                                        />
                                   </ItemWrapper>
                              </Wrapper>
                              <ItemWrapper gap="125px">
                                   <TooltipMui title="All sales transactions for this item will tracked under this account.">
                                        <Item
                                             color="var(--color-required)"
                                             fontSize="12px"
                                             fontWeight="medium"
                                             height="47%"
                                             margin="-2px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Account*
                                        </Item>
                                   </TooltipMui>
                                   <Autocomplete
                                        clearOnBlur
                                        disabled={!sales}
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  sellAccount.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  sellAccount.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  sellAccount.setValue(newValue);
                                             }
                                        }}
                                        options={filteredManu}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="sellAccount"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
                                             console.log("manOpt", option);
                                             return <li {...props}>{option?.title ?? option}</li>;
                                        }}
                                        selectOnFocus
                                        sx={{ width: 300 }}
                                        value={sellAccount.value.title}
                                   />
                              </ItemWrapper>
                              <ItemWrapper gap="100px">
                                   <Text textColor="var(--color-primary-dark)" width="20%">
                                        Description
                                   </Text>
                                   {/* @ts-ignore */}
                                   <TextareaAutosize
                                        name="sellDescription"
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
                                        <TooltipMui title="Add the sales tax that is applicable for this item. This tax will be auto-populated when you create transactions with this item.">
                                             <Icons
                                                  src={Icon.Faq}
                                                  style={{
                                                       marginLeft: "5px",
                                                  }}
                                             />
                                        </TooltipMui>
                                   </Text>
                                   <Autocomplete
                                        clearOnBlur
                                        disabled={!sales}
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  sellTax.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  sellTax.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  sellTax.setValue(newValue);
                                             }
                                        }}
                                        options={filteredManu}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="sellTax"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
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
                                        margin: "0",
                                   }}
                              >
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
                                             fontSize: "16px",
                                        }}
                                   >
                                        Purchase Information
                                   </p>
                              </CheckBoxWrapper>
                              <Wrapper>
                                   <ItemWrapper gap="70px">
                                        <TooltipMui title="The rate at which you purchased this item.">
                                             <Item
                                                  color="var(--color-required)"
                                                  fontSize="12px"
                                                  fontWeight="medium"
                                                  height="47%"
                                                  margin="-2px 0"
                                                  style={{
                                                       borderBottom: "1px dashed #969696",
                                                       paddingBottom: "2px",
                                                  }}
                                                  width="fit-content"
                                             >
                                                  Cost Price*
                                             </Item>
                                        </TooltipMui>
                                        <TextField
                                             name="costPrice"
                                             label={null}
                                             disabled={!purchase}
                                             {...costPrice.inputAttrs}
                                             size="small"
                                             sx={{ width: "300px" }}
                                             variant="outlined"
                                        />
                                   </ItemWrapper>
                              </Wrapper>
                              <ItemWrapper gap="90px">
                                   <TooltipMui title="All the purchase transactions for this item will be tracked under this account.">
                                        <Item
                                             color="var(--color-required)"
                                             fontSize="12px"
                                             fontWeight="medium"
                                             height="47%"
                                             margin="-2px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Account*
                                        </Item>
                                   </TooltipMui>
                                   <Autocomplete
                                        clearOnBlur
                                        disabled={!purchase}
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  costAccount.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  costAccount.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  costAccount.setValue(newValue);
                                                  console.log("new", newValue);
                                             }
                                        }}
                                        options={filteredManu}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="costAccount"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
                                             console.log("option", option);
                                             return <li {...props}>{option?.title ?? option}</li>;
                                        }}
                                        selectOnFocus
                                        sx={{ width: 300 }}
                                        value={costAccount.value.title}
                                   />
                              </ItemWrapper>
                              <ItemWrapper gap="70px">
                                   <Text textColor="var(--color-primary-dark)" width="20%">
                                        Description
                                   </Text>
                                   {/* @ts-ignore */}
                                   <TextareaAutosize
                                        name="costDescription"
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
                                        <TooltipMui title="Add the purchase tax that is applicable for this item. This tax will be auto-populated when you create transactions with this item.">
                                             <Icons
                                                  src={Icon.Faq}
                                                  style={{
                                                       marginLeft: "5px",
                                                  }}
                                             />
                                        </TooltipMui>
                                   </Text>
                                   <Autocomplete
                                        clearOnBlur
                                        disabled={!purchase}
                                        filterOptions={(options, params) => {
                                             const filtered = filter(options, params);

                                             const { inputValue } = params;
                                             // Suggest the creation of a new value
                                             const isExisting = options.some(
                                                  (option) => inputValue === option.title
                                             );
                                             if (inputValue !== "" && !isExisting) {
                                                  filtered.push({
                                                       inputValue,
                                                       title: `Add "${inputValue}"`,
                                                  });
                                             }

                                             return filtered;
                                        }}
                                        freeSolo
                                        getOptionLabel={(option) => {
                                             // Value selected with enter, right from the input
                                             if (typeof option === "string") {
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
                                             if (typeof newValue === "string") {
                                                  costTax.setValue({
                                                       title: newValue,
                                                  });
                                             } else if (newValue && newValue.inputValue) {
                                                  // Create a new value from the user input
                                                  costTax.setValue({
                                                       title: newValue.inputValue,
                                                  });
                                             } else {
                                                  costTax.setValue(newValue);
                                             }
                                        }}
                                        options={filteredManu}
                                        renderInput={(params) => (
                                             <TextField
                                                  name="costTax"
                                                  label={null} {...params} size="small" />
                                        )}
                                        renderOption={(props, option) => {
                                             console.log("manOpt", option);
                                             return <li {...props}>{option?.title ?? option}</li>;
                                        }}
                                        selectOnFocus
                                        sx={{ width: 300 }}
                                        value={costTax.value.title}
                                   />
                              </ItemWrapper>
                              <Divider />
                         </RightSection>
                    </Bottom>
                    <CheckBoxWrapper
                         style={{
                              margin: "0",
                         }}
                    >
                         <Checkbox
                              aria-describedby="cNote"
                              checked={purchase}
                              onChange={(e: any) => {
                                   setPurchase(!purchase);
                              }}
                              size="small"
                              value={purchase}
                         />
                         <div
                              style={{
                                   display: "flex",
                                   flexDirection: "column",
                              }}
                         >
                              <p
                                   className="terms-content"
                                   style={{
                                        fontSize: "16px",
                                   }}
                              >
                                   Track Inventory for this product
                              </p>
                              <Item color="#777777" fontSize="11px" fontWeight="400" margin="0px">
                                   You cannot enable/disable inventory tracking once you've created
                                   transactions for this item.
                              </Item>
                         </div>
                    </CheckBoxWrapper>
                    <Track>
                         <LeftSection>
                              <ItemWrapper
                                   gap="70px"
                                   style={{
                                        marginTop: "20px",
                                   }}
                              >
                                   <TooltipMui title="The account which tracks the inventory of this item.">
                                        <Item
                                             color="var(--color-required)"
                                             fontSize="14px"
                                             fontWeight="medium"
                                             height="47%"
                                             margin="-2px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Inventory Account*
                                        </Item>
                                   </TooltipMui>
                                   <FormControl sx={{ m: 5, minWidth: 300, margin: "0px" }}>
                                        <InputLabel htmlFor="grouped-select">Select Account</InputLabel>
                                        {/* @ts-ignore */}
                                        <Select
                                             name="inventoryAccount"
                                             {...inventoryAccnt.inputAttrs}
                                             // onChange={...inventoryAccnt.inputAttrs.onChange}
                                             id="grouped-select"
                                             label="Select Account"
                                             autoComplete="false"
                                             size="small"
                                        // value={inventoryAccnt.value}
                                        >
                                             <ListSubheader>Stocks</ListSubheader>
                                             <MenuItem value="Inventory Assets">Inventory Assets</MenuItem>
                                        </Select>
                                   </FormControl>
                              </ItemWrapper>
                              <ItemWrapper gap="100px">
                                   <TooltipMui title="The account which tracks the inventory of this item.">
                                        <Item
                                             color="var(--color-primary-dark)"
                                             fontSize="14px"
                                             fontWeight="medium"
                                             height="50%"
                                             margin="0px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Opening Stock
                                        </Item>
                                   </TooltipMui>
                                   <TextField
                                        name="openingStock"
                                        autoComplete="false"
                                        label={null}
                                        {...openingStock.inputAttrs}
                                        size="small"
                                        sx={{ width: "300px" }}
                                        variant="outlined"
                                   />
                              </ItemWrapper>
                              <ItemWrapper gap="100px">
                                   <TooltipMui title="The account which tracks the inventory of this item.">
                                        <Item
                                             color="var(--color-primary-dark)"
                                             fontSize="14px"
                                             fontWeight="medium"
                                             height="50%"
                                             margin="0px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Reorder Point
                                        </Item>
                                   </TooltipMui>
                                   <TextField
                                        autoComplete="false"
                                        name="reorderPoint"
                                        label={null}
                                        {...reorder.inputAttrs}
                                        size="small"
                                        sx={{ width: "300px" }}
                                        variant="outlined"
                                   />
                              </ItemWrapper>
                         </LeftSection>
                         <RightSection style={{
                              marginTop: "60px",
                         }}>
                              <ItemWrapper gap="70px">
                                   <TooltipMui title="The account which tracks the inventory of this item.">
                                        <Item
                                             color="var(--color-primary-dark)"
                                             fontSize="14px"
                                             fontWeight="medium"
                                             height="50%"
                                             margin="20px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                                  width: '21%',
                                                  textAlign: 'center'
                                             }}
                                             width="fit-content"
                                        >
                                             Opening Stock Rate per Unit
                                        </Item>
                                   </TooltipMui>
                                   <TextField
                                        name="openingStockRate"
                                        label={null}
                                        {...stockPerUnit.inputAttrs}
                                        size="small"
                                        sx={{ width: "300px" }}
                                        variant="outlined"
                                   />
                              </ItemWrapper>
                              <ItemWrapper gap="70px">
                                   <TooltipMui title="The account which tracks the inventory of this item.">
                                        <Item
                                             color="var(--color-primary-dark)"
                                             fontSize="14px"
                                             fontWeight="medium"
                                             height="50%"
                                             margin="0px 0"
                                             style={{
                                                  borderBottom: "1px dashed #969696",
                                                  paddingBottom: "2px",
                                             }}
                                             width="fit-content"
                                        >
                                             Preferred Vendor
                                        </Item>
                                   </TooltipMui>
                                   <TextField
                                        name="preferredVendor"
                                        label={null}
                                        {...preferredVendor.inputAttrs}
                                        size="small"
                                        sx={{ width: "300px" }}
                                        variant="outlined"
                                   />
                              </ItemWrapper>
                         </RightSection>
                    </Track>
               </Grid>
          </>
     );
};

export default UpdateProducts;
