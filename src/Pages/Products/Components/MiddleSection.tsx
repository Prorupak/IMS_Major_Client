import { FormHelperText, TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { ItemWrapper, Text } from 'Themes/utilityThemes';
import { ErrorMessage } from '@hookform/error-message';
import { ReactHookForm } from 'context/ReactHookForms';


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

let index = 0;

const { Option } = Select;

const selectAfter = (
     <Select defaultValue="" style={{ width: 60 }}>
          <Option value="m">m</Option>
          <Option value="cm">cm</Option>
          <Option value="in">in</Option>
     </Select>
)


const MiddleSection: React.FC = () => {
     const { register, setValues, setValue, Controller, errors, control, watch, test } = React.useContext(ReactHookForm);

     const selectWeight = (
          <Controller
               name="wUnit"
               control={control}
               render={({ field }: any) => (
                    <Select defaultValue="" {...field} style={{ width: 60 }}>
                         <Option value="m">m</Option>
                         <Option value="cm">cm</Option>
                         <Option value="in">in</Option>
                    </Select>

               )}
          />
     )
     const selectDm = (
          <Controller
               name="dUnit"
               control={control}
               render={({ field }: any) => (
                    <Select defaultValue="" {...field} style={{ width: 60 }}>
                         <Option value="m">m</Option>
                         <Option value="cm">cm</Option>
                         <Option value="in">in</Option>
                    </Select>

               )}
          />
     )

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
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>
                                   {/* @ts-ignore */}
                                   <Space direction="horizontal" style={{ width: "300px" }} size="">
                                        <Controller
                                             render={({ field }: any) => (
                                                  <>
                                                       <InputNumber
                                                            style={{ width: "70px" }}
                                                            {...field}
                                                            defaultValue=""
                                                       />
                                                  </>

                                             )}
                                             name="length"
                                             control={control}
                                             rules={{
                                                  pattern: {
                                                       value: /^[0-9]*$/,
                                                       message: "Value must be a number"
                                                  }
                                             }}
                                             defaultValue=""
                                        />
                                        <Controller
                                             render={({ field }: any) => (
                                                  <>
                                                       <InputNumber
                                                            style={{ width: "70px" }}
                                                            {...field}
                                                            defaultValue=""
                                                       />
                                                  </>

                                             )}
                                             name="breadth"
                                             control={control}
                                             rules={{
                                                  pattern: {
                                                       value: /^[0-9]*$/,
                                                       message: "Value must be a number"
                                                  }
                                             }}
                                             defaultValue=""
                                        />
                                        <Controller
                                             render={({ field }: any) => (
                                                  <>
                                                       <InputNumber
                                                            style={{ width: "70px" }}
                                                            {...field}
                                                            addonAfter={selectDm}
                                                            defaultValue=""
                                                       />
                                                  </>

                                             )}
                                             name="height"
                                             control={control}
                                             rules={{
                                                  pattern: {
                                                       value: /^[0-9]*$/,
                                                       message: "Value must be a number"
                                                  }
                                             }}
                                             defaultValue=""
                                        />
                                   </Space>
                                   <FormHelperText error={errors.length === errors.breadth === errors.height ? true : false} style={{ marginLeft: "10px" }}>
                                        <ErrorMessage errors={errors} name={"length"} />
                                   </FormHelperText>
                              </div>
                         </ItemWrapper>
                    </Wrapper>
                    <ItemWrapper gap="100px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Manufacturer
                         </Text>
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Select
                                             style={{ width: 300 }}
                                             {...field}
                                             placeholder="Select Manufacturer"
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

                                   )}
                                   name="manufacturer"
                                   control={control}
                                   defaultValue=""
                              />
                         </div>

                    </ItemWrapper>
               </LeftSection>
               <RightSection>
                    <Wrapper>
                         <ItemWrapper gap="70px">
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   Weight
                              </Text>
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                                   <Controller
                                        render={({ field }: any) => (
                                             <InputNumber addonAfter={selectWeight} defaultValue="" {...field} />
                                        )}
                                        name="weight"
                                        control={control}
                                        rules={{
                                             pattern: {
                                                  value: /^[0-9]*$/,
                                                  message: "only numbers are allowed"
                                             }
                                        }}
                                        defaultValue=""
                                   />
                                   <FormHelperText error={errors.weight ? true : false} style={{ marginLeft: "10px" }}>
                                        <ErrorMessage errors={errors} name="weight" />
                                   </FormHelperText>
                              </div>
                         </ItemWrapper>
                    </Wrapper>
                    <ItemWrapper gap="70px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Brand
                         </Text>
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Select
                                             style={{ width: 300 }}
                                             {...field}
                                             placeholder="Select a Brand"
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
                                   )}
                                   name="brand"
                                   control={control}
                                   defaultValue=""
                              />
                         </div>

                    </ItemWrapper>
               </RightSection>
          </>
     );
}

export default MiddleSection