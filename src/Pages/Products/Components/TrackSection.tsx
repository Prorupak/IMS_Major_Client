import { TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CustomSelect, StyledOption, TooltipMui } from 'Themes/MaterialUI';
import { Item, ItemWrapper, Text } from 'Themes/utilityThemes';


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
     register: any;
     errors: any;
     setValue: any;
     getValues: any
}

let index = 0;

const { Option } = Select;


const TrackSection: React.FC<IProps> = ({ register, errors, setValue, getValues }) => {
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
                         <Select
                              showSearch
                              placeholder="Select a person"
                              optionFilterProp="children"
                              onChange={onChange}
                              onSearch={onSearch}
                              filterOption={(input, option) =>
                                   // @ts-ignore
                                   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                         >
                              <Option value="jack">Jack</Option>
                              <Option value="lucy">Lucy</Option>
                              <Option value="tom">Tom</Option>
                         </Select>
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
                              autoComplete="false"
                              label={null}
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
                              label={null}
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
                              label={null}
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
                         <Select
                              showSearch
                              placeholder="Select a person"
                              optionFilterProp="children"
                              onChange={onChange}
                              onSearch={onSearch}
                              filterOption={(input, option) =>
                                   // @ts-ignore
                                   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                         >
                              <Option value="jack">Jack</Option>
                              <Option value="lucy">Lucy</Option>
                              <Option value="tom">Tom</Option>
                         </Select>
                    </ItemWrapper>
               </RightSection>
          </>
     );
}

export default TrackSection