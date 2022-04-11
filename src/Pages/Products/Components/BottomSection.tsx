import { Checkbox, TextareaAutosize, TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CustomSelect, StyledOption, TooltipMui } from 'Themes/MaterialUI';
import { CheckBoxWrapper, Item, ItemWrapper, Text, Icon as Icons } from 'Themes/utilityThemes';
import Icon from 'Assets/Icons/Icon';

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


const BottomSection: React.FC<IProps> = ({ register, errors, setValue, getValues }) => {
     const [sales, setSales] = React.useState(true);
     const [purchase, setPurchase] = React.useState(true);

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
     return (
          <>
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
                                   disabled={!sales}
                                   label={null}
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
                         <Select
                              style={{ width: 300 }}
                              placeholder="custom dropdown render"
                              dropdownRender={(menu: any) => (
                                   <>
                                        {menu}
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                                             <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                                             <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                                  <PlusOutlined /> Add item
                                             </Typography.Link>
                                        </Space>
                                   </>
                              )}
                         >
                              {items.map(item => (
                                   <Option key={item}>{item}</Option>
                              ))}
                         </Select>
                    </ItemWrapper>
                    <ItemWrapper gap="100px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Description
                         </Text>
                         <TextareaAutosize
                              disabled={!sales}
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
                         <Select
                              style={{ width: 300 }}
                              placeholder="custom dropdown render"
                              dropdownRender={(menu: any) => (
                                   <>
                                        {menu}
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                                             <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                                             <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                                  <PlusOutlined /> Add item
                                             </Typography.Link>
                                        </Space>
                                   </>
                              )}
                         >
                              {items.map(item => (
                                   <Option key={item}>{item}</Option>
                              ))}
                         </Select>
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
                                   label={null}
                                   disabled={!purchase}
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
                         <Select
                              style={{ width: 300 }}
                              placeholder="custom dropdown render"
                              dropdownRender={(menu: any) => (
                                   <>
                                        {menu}
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                                             <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                                             <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                                  <PlusOutlined /> Add item
                                             </Typography.Link>
                                        </Space>
                                   </>
                              )}
                         >
                              {items.map(item => (
                                   <Option key={item}>{item}</Option>
                              ))}
                         </Select>
                    </ItemWrapper>
                    <ItemWrapper gap="70px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Description
                         </Text>
                         <TextareaAutosize
                              disabled={!purchase}
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
                         <Select
                              style={{ width: 300 }}
                              placeholder="custom dropdown render"
                              dropdownRender={(menu: any) => (
                                   <>
                                        {menu}
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                                             <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                                             <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                                  <PlusOutlined /> Add item
                                             </Typography.Link>
                                        </Space>
                                   </>
                              )}
                         >
                              {items.map(item => (
                                   <Option key={item}>{item}</Option>
                              ))}
                         </Select>
                    </ItemWrapper>
                    <Divider />
               </RightSection>
          </>
     );
}

export default BottomSection