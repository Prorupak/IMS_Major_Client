import { Checkbox, FormHelperText, TextareaAutosize, TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CustomSelect, StyledOption, TooltipMui } from 'Themes/MaterialUI';
import { CheckBoxWrapper, Item, ItemWrapper, Text, Icon as Icons } from 'Themes/utilityThemes';
import Icon from 'Assets/Icons/Icon';
import { ErrorMessage } from '@hookform/error-message';
import { ReactHookForm } from 'context/ReactHookForms';
import TextArea from 'antd/lib/input/TextArea';

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


const BottomSection: React.FC = () => {

     const { register, setValues, setValue, Controller, errors, control, watch, test, resetField } = React.useContext(ReactHookForm);

     // React.useEffect(() => {
     //      removeItem();
     // }, []);

     const [sales, setSales] = React.useState(true);
     const [purchase, setPurchase] = React.useState(true);

     const [cItems, setCItems] = useState(['']);
     const [sItems, setSItems] = useState(['']);
     const [cTax, setCTax] = useState('');
     const [sTax, setSTax] = useState('');
     const addCTax = (e: any) => {
          e.preventDefault();
          setCItems([...cItems, cTax || `New item ${index++}`]);
          setCTax('');
     };
     const addSTax = (e: any) => {
          e.preventDefault();
          setSItems([...sItems, sTax || `New item ${index++}`]);
          setSTax('');
     };

     const onNameCChange = (event: any) => {
          setCTax(event.target.value);
     };
     const onNameChange = (event: any) => {
          setSTax(event.target.value);
     };

     const removeItem = (index?: string) => {
          resetField(index);
     }
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
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                                   <Controller
                                        render={({ field }: any) => (
                                             <Input
                                                  autoComplete='off'
                                                  disabled={!sales}
                                                  status={sales === true && errors.sellingPrice ? "error" : ""}
                                                  {...field}
                                                  defaultValue=""
                                                  style={{ width: "300px" }}
                                             />


                                        )}
                                        name={!sales ? "" : "sellingPrice"}
                                        control={control}
                                        rules={sales ? {
                                             required: "This is required field.",
                                             pattern: {
                                                  value: /^[0-9]*$/,
                                                  message: "only Numbers are allowed",
                                             }
                                        } : {}}
                                        defaultValue=""
                                   />
                                   {
                                        sales === true && (
                                             <FormHelperText error={errors.sellingPrice ? true : false} style={{ marginLeft: "10px" }}>
                                                  <ErrorMessage errors={errors} name="sellingPrice" />
                                             </FormHelperText>
                                        )
                                   }
                              </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (

                                        <Select
                                             showSearch
                                             disabled={!sales}
                                             status={sales === true && errors.salesAccount ? "error" : ""}
                                             {...field}
                                             style={{ width: "300px" }}
                                             placeholder="Select a account"
                                             optionFilterProp="children"
                                             filterOption={(input, option) =>
                                                  //@ts-ignore
                                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                             }
                                             defaultValue=""
                                             size='middle'
                                        >
                                             <Option value="kg">kg</Option>
                                             <Option value="dozen">dozen</Option>
                                             <Option value="piece">piece</Option>
                                             <Option value="litre">litre</Option>
                                             <Option value="bottle">bottle</Option>
                                        </Select>

                                   )}
                                   name={!sales ? "" : "salesAccount"}
                                   control={control}
                                   rules={sales ? {
                                        required: "This is required field.",
                                   } : {}}
                                   defaultValue=""
                              />
                              {
                                   sales === true && (
                                        <FormHelperText error={errors.salesAccount ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="salesAccount" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
                    </ItemWrapper>
                    <ItemWrapper gap="100px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Description
                         </Text>
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <TextArea disabled={!sales} autoComplete='off' status={sales === true && errors.salesDescription ? "error" : ""} allowClear {...field} style={{ width: "300px" }} />

                                   )}
                                   name={!sales ? "" : "salesDescription"}
                                   control={control}
                                   rules={{
                                        minLength: {
                                             value: 5,
                                             message: "minimum length must be 5"
                                        }
                                   }}
                                   defaultValue=""
                              />
                              {
                                   sales === true && (
                                        <FormHelperText error={errors.salesDescription ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="salesDescription" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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
                         <Controller
                              render={({ field }: any) => (
                                   <Select
                                        showSearch
                                        disabled={!sales}
                                        style={{ width: 300 }}
                                        {...field}
                                        placeholder="Tax"
                                        dropdownRender={(menu: any) => (
                                             <>
                                                  {menu}
                                                  <Divider style={{ margin: '8px 0' }} />
                                                  <Space align="center" style={{ padding: '0 8px 4px' }}>
                                                       <Input placeholder="Please enter item" value={sTax} onChange={onNameChange} />
                                                       <Typography.Link onClick={addSTax} style={{ whiteSpace: 'nowrap' }}>
                                                            <PlusOutlined /> Add item
                                                       </Typography.Link>
                                                  </Space>
                                             </>
                                        )}
                                   >
                                        {sItems.map((item: any) => (
                                             <Option key={item}>{item}</Option>
                                        ))}
                                   </Select>
                              )}
                              name={!sales ? "" : "sellTax"}
                              control={control}
                              defaultValue=""
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
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                                   <Controller
                                        render={({ field }: any) => (
                                             <Input autoComplete='off' disabled={!purchase} status={purchase === true && errors.costPrice ? "error" : ""} allowClear {...field} defaultValue="" style={{ width: "300px" }} />

                                        )}
                                        name={!purchase ? "" : "costPrice"}
                                        control={control}
                                        rules={purchase ? {
                                             required: "This is required field.",
                                             pattern: {
                                                  value: /^[0-9]*$/,
                                                  message: "only numbers are allowed"
                                             }
                                        } : {}}
                                        defaultValue=""
                                   />
                                   {
                                        purchase === true && (
                                             <FormHelperText error={errors.costPrice ? true : false} style={{ marginLeft: "10px" }}>
                                                  <ErrorMessage errors={errors} name="costPrice" />
                                             </FormHelperText>
                                        )
                                   }
                              </div>
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
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <Select
                                             showSearch
                                             disabled={!purchase}
                                             status={purchase === true && errors.costAccount ? "error" : ""}
                                             {...field}
                                             style={{ width: "300px" }}
                                             placeholder="Select a account"
                                             optionFilterProp="children"
                                             filterOption={(input, option) =>
                                                  //@ts-ignore
                                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                             }
                                             defaultValue=""
                                             size='middle'
                                        >
                                             <Option value="kg">kg</Option>
                                             <Option value="dozen">dozen</Option>
                                             <Option value="piece">piece</Option>
                                             <Option value="litre">litre</Option>
                                             <Option value="bottle">bottle</Option>
                                        </Select>
                                   )}
                                   name={!purchase ? "" : "costAccount"}
                                   control={control}
                                   rules={purchase ? {
                                        required: "This is required field.",
                                   } : {}}
                                   defaultValue=""
                              />
                              {
                                   purchase === true && (
                                        <FormHelperText error={errors.costAccount ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="costAccount" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
                    </ItemWrapper>
                    <ItemWrapper gap="70px">
                         <Text textColor="var(--color-primary-dark)" width="20%">
                              Description
                         </Text>
                         <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                              <Controller
                                   render={({ field }: any) => (
                                        <TextArea disabled={!purchase} autoComplete='off' status={purchase === true && errors.costDescription ? "error" : ""} allowClear {...field} style={{ width: "300px" }} />

                                   )}
                                   name={!purchase ? "" : "costDescription"}
                                   control={control}
                                   rules={{
                                        minLength: {
                                             value: 5,
                                             message: "minimum length must be 5"
                                        }
                                   }}
                                   defaultValue=""
                              />
                              {
                                   purchase === true && (
                                        <FormHelperText error={errors.costDescription ? true : false} style={{ marginLeft: "10px" }}>
                                             <ErrorMessage errors={errors} name="costDescription" />
                                        </FormHelperText>
                                   )
                              }
                         </div>
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

                         <Controller
                              render={({ field }: any) => (
                                   <Select
                                        showSearch
                                        disabled={!purchase}
                                        style={{ width: 300 }}
                                        {...field}
                                        placeholder="Tax"
                                        dropdownRender={(menu: any) => (
                                             <>
                                                  {menu}
                                                  <Divider style={{ margin: '8px 0' }} />
                                                  <Space align="center" style={{ padding: '0 8px 4px' }}>
                                                       <Input placeholder="Please enter item" value={cTax} onChange={onNameCChange} />
                                                       <Typography.Link onClick={addCTax} style={{ whiteSpace: 'nowrap' }}>
                                                            <PlusOutlined /> Add item
                                                       </Typography.Link>
                                                  </Space>
                                             </>
                                        )}
                                   >
                                        {cItems.map((item: any) => (
                                             <Option key={item}>{item}</Option>
                                        ))}
                                   </Select>
                              )}
                              name={!purchase ? "" : "costTax"}
                              control={control}
                              defaultValue=""
                         />
                    </ItemWrapper>
                    <Divider />
               </RightSection>
          </>
     );
}

export default BottomSection