import { TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CustomSelect, StyledOption } from 'Themes/MaterialUI';
import { ItemWrapper, Text } from 'Themes/utilityThemes';


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


const MiddleSection: React.FC<IProps> = ({ register, errors, setValue, getValues }) => {
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
                    <Wrapper>
                         <ItemWrapper gap="100px">
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   Dimensions
                              </Text>
                              <TextField
                                   label={null}
                                   size="small"
                                   sx={{ width: "300px" }}
                                   variant="outlined"
                              />
                              <SelectWrapper style={{ right: "1px" }}>
                                   <CustomSelect
                                   //    onChange={dUnit.setValue} 
                                   //    value={dUnit.value}
                                   >
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
                    <Wrapper>
                         <ItemWrapper gap="70px">
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   Weight
                              </Text>
                              <TextField
                                   label={null}
                                   size="small"
                                   sx={{ width: "300px" }}
                                   variant="outlined"
                              />
                              <SelectWrapper>
                                   <CustomSelect
                                   //     onChange={WUnit.setValue} 
                                   //     value={WUnit.value}
                                   >
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
               </RightSection>
          </>
     );
}

export default MiddleSection