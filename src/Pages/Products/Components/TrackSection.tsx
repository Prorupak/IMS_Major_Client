import { FormHelperText, TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space, AutoComplete } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CustomSelect, StyledOption, TooltipMui } from 'Themes/MaterialUI';
import { Item, ItemWrapper, Text } from 'Themes/utilityThemes';
import { ReactHookForm } from 'context/ReactHookForms';
import { ErrorMessage } from '@hookform/error-message';
import { renderItem, renderTitle } from 'utitls/Antd';


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


const Wrapper = styled(motion.div).attrs({})`
 position: relative;
 left: 0;
 display: flex;
`;

const SelectWrapper = styled(motion.div).attrs({})`
 /* display: flex; */
 position: absolute;
 right: 0.5px;
`;

type IProps = {
     track: boolean;
}

let index = 0;

const { Option } = Select;


const TrackSection: React.FC<IProps> = ({ track }) => {
     const { register, setValues, setValue, Controller, errors, control, watch, test, resetField } = React.useContext(ReactHookForm);

     const [items, setItems] = useState(['jack', 'lucy']);
     const [name, setName] = useState('');
     const addItem = (e: any) => {
          e.preventDefault();
          setItems([...items, name || `New item ${index++}`]);
          setName('');
     };

     const onNameChange = (event: any) => {
          setName(event.target.value);
     };

     function onChange(value: any) {
          console.log(`selected ${value}`);
     }

     function onSearch(val: any) {
          console.log('search:', val);
     }

     const inventoryOptions = [
          {
               label: renderTitle('Stocks'),
               options: [renderItem('Inventory Assets')]
          },
     ];
     return (
          <>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
                              <Controller
                                   control={control}
                                   name="inventoryAccount"
                                   // if track is true, then we need to set rules
                                   rules={track && {
                                        required: "This is required field.",
                                   }}
                                   render={({ field }: any) => (
                                        <>
                                             <AutoComplete
                                                  {...field}
                                                  showArrow
                                                  dropdownClassName="certain-category-search-dropdown"
                                                  dropdownMatchSelectWidth={300}
                                                  style={{
                                                       width: '300px',
                                                  }}
                                                  options={inventoryOptions}
                                             >
                                                  <Input placeholder="Select Account" />
                                             </AutoComplete>
                                        </>
                                   )}
                              />
                              {
                                   track === true && (
                                        <FormHelperText error={track && errors.inventoryAccount ? true : false} style={{ marginLeft: '10px' }}>
                                             <ErrorMessage errors={errors} name="inventoryAccount" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Input
                                             autoComplete='off'
                                             disabled={!track}
                                             status={track === true && errors.openingStock ? "error" : ""}
                                             {...field}
                                             defaultValue=""
                                             style={{ width: "300px" }}
                                        />


                                   )}
                                   name={"openingStock"}
                                   control={control}
                                   rules={{
                                        pattern: {
                                             value: /^[0-9]*$/,
                                             message: "only Numbers are allowed",
                                        }
                                   }}
                                   defaultValue=""
                              />
                              {
                                   track === true && (
                                        <FormHelperText error={errors.openingStock ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="openingStock" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Input
                                             autoComplete='off'
                                             disabled={!track}
                                             status={track === true && errors.reorderPoint ? "error" : ""}
                                             {...field}
                                             defaultValue=""
                                             style={{ width: "300px" }}
                                        />


                                   )}
                                   name={"reorderPoint"}
                                   control={control}
                                   rules={{
                                        pattern: {
                                             value: /^[0-9]*$/,
                                             message: "only Numbers are allowed",
                                        }
                                   }}
                                   defaultValue=""
                              />
                              {
                                   track === true && (
                                        <FormHelperText error={errors.reorderPoint ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="reorderPoint" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Input
                                             autoComplete='off'
                                             disabled={!track}
                                             status={track === true && errors.openingStockRate ? "error" : ""}
                                             {...field}
                                             defaultValue=""
                                             style={{ width: "300px" }}
                                        />


                                   )}
                                   name={"openingStockRate"}
                                   control={control}
                                   rules={{
                                        pattern: {
                                             value: /^[0-9]*$/,
                                             message: "only Numbers are allowed",
                                        }
                                   }}
                                   defaultValue=""
                              />
                              {
                                   track === true && (
                                        <FormHelperText error={errors.openingStockRate ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="openingStockRate" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
                              <Controller
                                   control={control}
                                   name={"preferredVendor"}
                                   rules={{
                                        required: "This field is required",
                                   }}
                                   render={({ field }: any) => (
                                        <>
                                             <Select
                                                  disabled={!track}
                                                  showSearch
                                                  status={errors.preferredVendor ? "error" : ""}
                                                  placeholder="Select a preferredVendor"
                                                  optionFilterProp="children"
                                                  filterOption={(input, option) =>
                                                       //@ts-ignore
                                                       option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                  }
                                                  defaultValue=""
                                                  size='middle'
                                                  {...field}
                                                  style={{
                                                       width: "300px",
                                                  }}>
                                                  <Option value="kg">kg</Option>
                                                  <Option value="dozen">dozen</Option>
                                                  <Option value="piece">piece</Option>
                                                  <Option value="litre">litre</Option>
                                                  <Option value="bottle">bottle</Option>
                                             </Select>
                                        </>
                                   )}
                              />
                              <FormHelperText error={errors.preferredVendor ? true : false} style={{ marginLeft: '10px' }}>
                                   <ErrorMessage errors={errors} name="preferredVendor" />
                              </FormHelperText>
                         </div>
                    </ItemWrapper>
               </RightSection>
          </>
     );
}

export default TrackSection