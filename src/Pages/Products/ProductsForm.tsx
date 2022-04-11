import React from "react";
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

import { useForm } from 'react-hook-form';

import Icon from "Assets/Icons/Icon";
import useFetch from "Hooks/useFetch";
import { ReactHookForm } from 'context/ReactHookForms'
import { IProductsDetails } from "Interfaces/Interfaces";
import TopSection from "./Components/TopSection";
import MiddleSection from "./Components/MiddleSection";
import TrackSection from "./Components/TrackSection";

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

const filter = createFilterOptions();



const ProductsForm = () => {

  const { register, handleSubmit, errors, setValue, getValues } = React.useContext(ReactHookForm);

  const [sales, setSales] = React.useState(true);
  const [purchase, setPurchase] = React.useState(true);


 // setValue(brand as typeof brandName);

  return (
    <>
      <Grid>
        {/* {error ? (
          <Error error={error}>
            <p>error</p>
            <Icons
              onClick={() => setError(!error)}
              src={Icon.Close}
              style={{ height: "10px", width: "10px" }}
            />
          </Error>
        ) : null} */}
        <Top>
          <TopSection />
        </Top>
        <Divider />
        <Middle>
          <MiddleSection register={register} errors={errors} setValue={setValue} getValues={getValues} />
        </Middle>
        <Divider
          sx={{
            margin: "20px 0px",
          }}
        />
        <Bottom>

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
          <TrackSection register={register} errors={errors} setValue={setValue} getValues={getValues} />
        </Track>
      </Grid>
    </>
  );
};

export default ProductsForm;
