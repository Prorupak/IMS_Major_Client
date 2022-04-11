import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { Text, Icon as Icons, CheckBoxWrapper } from 'Themes/utilityThemes';
import { useForm } from 'react-hook-form';
import { TooltipMui } from 'Themes/MaterialUI';
import Icon from 'Assets/Icons/Icon';
import { Checkbox, FormHelperText, TextareaAutosize, TextField } from '@mui/material';
import { ProductValidation } from 'validation/Val';
import { ErrorMessage } from '@hookform/error-message';
import { Select } from 'antd';
import { ReactHookForm } from 'context/ReactHookForms';

const { Option } = Select;

const ItemWrapper = styled(motion.div).attrs({}) <{ gap: any }>`
 position: relative;
 display: flex;
 align-items: center;
 min-height: 10px;
 grid-area: left;
 gap: ${({ gap }: any) => gap};

 .textarea{
      color: red;
 }

 .textarea:focus{
      outline: none;
          border: 2px solid #ed2e2e;
          border-radius: 5px;
 }
`;




const TopSection: React.FC = () => {
     const [returnable, setReturnable] = React.useState(false);
     const { register, setValues, setValue, Controller, errors, control, watch } = React.useContext(ReactHookForm);

     const select = watch('select');

     console.log('select', select)


     React.useEffect(() => {
          setValues({
               select: [],
          });
          register("select", {
               validate: (value: any) => !!value.length || "This is required."
          });
     }, [register, setValues]);
     return (
          <>
               <ItemWrapper gap="30px">
                    <Text textColor="var(--color-required)" width="20%">
                         Name*
                    </Text>
                    <TextField
                         label={null}
                         {...register("name", ProductValidation.name)}
                         size="small"
                         sx={{ width: "600px" }}
                         error={errors.name ? true : false}
                         variant="outlined"
                         helperText={<ErrorMessage errors={errors} render={({ message }: any) => {
                              console.log('message', message)
                              return message

                         }} name="name" />}
                    />
               </ItemWrapper>
               <ItemWrapper gap="30px">
                    <Text textColor="var(--color-primary-dark)" width="20%">
                         Description
                    </Text>
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
                         <TextareaAutosize
                              {...register("description", ProductValidation.description)}
                              aria-label="minimum height"
                              minRows={3}
                              style={{ width: "600px" }}
                              className={errors.description ? "textarea" : ""}
                         />
                         {
                              errors.description && <FormHelperText error={errors.description ? true : false} style={{ marginLeft: '5px' }}>{errors.description.message}</FormHelperText>
                         }

                    </div>
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
                         label={null}
                         {...register("sku", ProductValidation.sku)}
                         aria-label="minimum height"
                         error={errors.sku ? true : false}
                         size="small"
                         helperText={<ErrorMessage errors={errors} render={({ message }: any) => {
                              console.log('message', message)
                              return message
                         }} name="sku" />}
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
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
                         <Controller
                              name={"unit"}
                              control={control}
                              render={({ field: { onChange, onBlur, value } }: any) => {
                                   return (
                                        <Select
                                             showSearch
                                             style={{ width: 200 }}
                                             placeholder="Select a unit"
                                             onChange={(e: any) => {
                                                  setValue('select', value as string[])
                                             }}
                                             onBlur={onBlur}
                                             value={select}
                                             optionFilterProp="children"
                                             filterOption={(input, option) =>
                                                  // @ts-ignore
                                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                             }
                                             filterSort={(optionA, optionB) =>
                                                  // @ts-ignore
                                                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                             }
                                        >
                                             <Option value="box">box</Option>
                                             <Option value="kg">kg</Option>
                                             <Option value="gm">gm</Option>
                                             <Option value="in">in</Option>
                                             <Option value="cm">cm</Option>
                                             <Option value="m">m</Option>
                                        </Select>
                                   )
                              }}
                         />
                         {
                              errors.unit && <FormHelperText error={errors.unit ? true : false} style={{ marginLeft: '5px' }}>{errors.description.message}</FormHelperText>
                         }
                    </div>

               </ItemWrapper>
               <CheckBoxWrapper>
                    <Controller
                         name={"returnable"}
                         control={control}
                         render={({ field: { onChange, onBlur, value } }: any) => {
                              return (
                                   <>
                                        <Checkbox
                                             aria-describedby="cNote"
                                             onChange={onChange}
                                             size="small"
                                             value={value}
                                        />
                                        <p className="terms-content">Returnable Item</p>
                                   </>
                              )
                         }} />

               </CheckBoxWrapper>
          </>
     )
}

export default TopSection