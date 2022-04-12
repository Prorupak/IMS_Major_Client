import { FormHelperText, TextField } from '@mui/material';
import { Select, Divider, Input, Typography, Space, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';
import { ItemWrapper, Text } from 'Themes/utilityThemes';
import { ErrorMessage } from '@hookform/error-message';
import { ReactHookForm } from 'context/ReactHookForms';
import { ProductContext, ProductData } from 'context/ProductContext';
import { IProductsDetails } from 'Interfaces/Interfaces';


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

let BrandIndex = {
     brand: 'hello'
};
let ManuIndex = {
     manufacturer: 'hi'
};

const { Option } = Select;

const selectAfter = (
     <Select defaultValue="" style={{ width: 60 }}>
          <Option value="m">m</Option>
          <Option value="cm">cm</Option>
          <Option value="in">in</Option>
     </Select>
)


const MiddleSection: React.FC = () => {
     const { register, setValues, reset, setValue, Controller, errors, control, watch, test } = React.useContext(ReactHookForm);
     const { data } = React.useContext(ProductContext)
     const { product } = React.useContext(ProductData);


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


     const filteredBrandName = data.filter((item: any) => {
          return
     })

     console.log('brand', data.map((item: any) => item.brand))

     const brandS = data.map((item: any) => item.brand)

     const Mans = data.map((item: any) => item.manufacturer)
     console.log('brand', brandS)
     console.log('mans', Mans)



     const [itemsBrand, setItemsBrand] = useState(brandS);
     const [itemsManu, setItemsManu] = useState(Mans);
     console.log('mansnns', itemsManu);
     const [nameBrand, setNameBrand] = useState('');
     const [nameManu, setNameManu] = useState('');
     const addItemBrand = (e: any) => {
          e.preventDefault();
          setItemsBrand([...itemsBrand, nameBrand || `New Item ${BrandIndex}`]);
          setNameBrand('');
     };
     const addItemManu = (e: any) => {
          e.preventDefault();
          setItemsManu([...itemsManu, nameManu || `New item ${ManuIndex}`]);
          setNameManu('');
     };

     const onNameBrandChange = (event: any) => {
          setNameBrand(event.target.value);
          console.log(nameBrand)
     };
     const onNameManuChange = (event: any) => {
          setNameManu(event.target.value);
     };

     console.log('product', product)

     React.useEffect(() => {
          reset({
               brand: product.brand,
               manufacturer: product.manufacturer,
               // weight: product.weight[0].amount,
          })
     }, [product])
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
                                                            <Input placeholder="Please enter item" value={nameManu} onChange={onNameManuChange} />
                                                            <Typography.Link onClick={addItemManu} style={{ whiteSpace: 'nowrap' }}>
                                                                 <PlusOutlined /> Add item
                                                            </Typography.Link>
                                                       </Space>
                                                  </>
                                             )}
                                        >
                                             {itemsManu.map((items: any, idx: number) => (
                                                  <Option key={idx}>{items}</Option>
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
                                             placeholder="Select a Brand"
                                             dropdownRender={(menu: any) => (
                                                  <>
                                                       {menu}
                                                       <Divider style={{ margin: '8px 0' }} />
                                                       <Space align="center" style={{ padding: '0 8px 4px' }}>
                                                            <Input  {...field} placeholder="Please enter item" value={nameBrand} onChange={onNameBrandChange} />
                                                            <Typography.Link onClick={addItemBrand} style={{ whiteSpace: 'nowrap' }}>
                                                                 <PlusOutlined /> Add item
                                                            </Typography.Link>
                                                       </Space>
                                                  </>
                                             )}
                                        >
                                             {itemsBrand.map((item: any, idx: number) => (
                                                  <Option key={idx}>{item}</Option>
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