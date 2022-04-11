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
import { ErrorMessage } from '@hookform/error-message';

import { useInput } from "Hooks/useInput";
import Icon from "Assets/Icons/Icon";
import { CustomSelect, StyledOption, TooltipMui } from "Themes/MaterialUI";
import useFetch from "Hooks/useFetch";
import { IProductsDetails } from "Interfaces/Interfaces";
import { ProductContext, ProductData } from "context/ProductContext";
import { useParams } from "react-router";
import { useForm } from "react-hook-form"
import axios from "axios";

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

type form = {
     name: string;
     email: string;
}

type TValidation = {
     name: {
          required: string;
          minLength: {
               value: number;
               message: string;
          };
          pattern: {
               value: RegExp;
               message: string;
          };
     };
     email: {
          required: string;
          pattern: {
               value: RegExp;
               message: string;
          };
     }
}

const validation: TValidation = {
     name: {
          required: "Name is required",
          minLength: {
               value: 3,
               message: "Name must be at least 3 characters",
          },
          pattern: {
               value: /^[a-zA-Z0-9 ]+$/,
               message: "Name must be alphanumeric",
          },
     },
     email: {
          required: "Email is required",
          pattern: {
               value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
               message: "Email is invalid",
          },
     },

}



const Update = () => {


     const { register, handleSubmit, formState: { errors } } = useForm<form>();
     const { id } = useParams()

     const onSubmit = async (data: any) => {
          console.log('data', data)
          try {
               await axios.post('http://localhost:9001/api/user', data)

          } catch (errs: any) {
               console.log(errs.message)
          }
     }



     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <Grid>
                    <Top>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-required)" width="20%">
                                   Name*
                              </Text>
                              <TextField
                                   // {...errors ? error : null}
                                   error={errors.name ? true : false}
                                   {...register('name', validation.name)}
                                   label={null}
                                   helperText={<ErrorMessage errors={errors} render={({ message }: any) => {
                                        console.log('message', message)
                                        return message

                                   }} name="name" />}
                                   size="small"
                                   sx={{ width: "600px" }}
                                   variant="outlined"
                              />
                         </ItemWrapper>
                         <ItemWrapper gap="30px">
                              <Text textColor="var(--color-required)" width="20%">
                                   Email*
                              </Text>
                              <TextField
                                   // {...errors ? error : null}
                                   error={errors.email ? true : false}
                                   // @ts-ignore
                                   {...register('email', {
                                        required: "Email is required",
                                   })}
                                   label={null}
                                   helperText={<ErrorMessage errors={errors} render={({ message }: any) => {
                                        console.log('message', message)
                                        return message

                                   }}
                                        name="email" />}
                                   size="small"
                                   sx={{ width: "600px" }}
                                   variant="outlined"
                              />
                         </ItemWrapper>
                    </Top>
                    <Divider />


               </Grid>
               <button type="submit">Submit</button>
          </form>
     );
};

export default Update;