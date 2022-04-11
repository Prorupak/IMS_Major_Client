import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { Text, Icon as Icons, CheckBoxWrapper } from 'Themes/utilityThemes';
import { TooltipMui } from 'Themes/MaterialUI';
import Icon from 'Assets/Icons/Icon';
import { Checkbox, FormHelperText } from '@mui/material';
import { ProductValidation } from 'validation/Val';
import { ErrorMessage } from '@hookform/error-message';
import { Input, Select } from 'antd';
import { ReactHookForm } from 'context/ReactHookForms';

const { Option } = Select;
const { TextArea } = Input;

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
     const { register, setValues, setValue, Controller, errors, control, watch, test } = React.useContext(ReactHookForm);

     // const select = watch('select');

     // console.log('select', select)



     React.useEffect(() => {

     }, [register]);
     return (
          <>
               <ItemWrapper gap="30px">
                    <Text textColor="var(--color-required)" width="20%">
                         Name*
                    </Text>
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' status={errors.name ? "error" : ""} allowClear {...field} defaultValue="" style={{ width: "600px" }} />

                              )}
                              name="name"
                              control={control}
                              rules={{
                                   required: "This is required field.",
                                   pattern: {
                                        value: /^[a-zA-Z]*$/,
                                        message: "only letters"
                                   }
                              }}
                              defaultValue=""
                         />
                         <FormHelperText error={errors.name ? true : false} style={{ marginLeft: "10px" }}>
                              <ErrorMessage errors={errors} name="name" />
                         </FormHelperText>
                    </div>
               </ItemWrapper>
               <ItemWrapper gap="30px">
                    <Text textColor="var(--color-primary-dark)" width="20%">
                         Description
                    </Text>
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                         <Controller
                              render={({ field }: any) => (
                                   <TextArea autoComplete='off' status={errors.description ? "error" : ""} allowClear {...field} style={{ width: "600px" }} />

                              )}
                              name="description"
                              control={control}
                              rules={{
                                   minLength: {
                                        value: 10,
                                        message: "minimum length must be 10"
                                   }
                              }}
                              defaultValue=""
                         />
                         <FormHelperText error={errors.description ? true : false} style={{ marginLeft: "10px" }}>
                              <ErrorMessage errors={errors} name="description" />
                         </FormHelperText>
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
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                         <Controller
                              render={({ field }: any) => (
                                   <Input autoComplete='off' status={errors.sku ? "error" : ""} allowClear {...field} defaultValue="" style={{ width: "600px" }} />

                              )}
                              name="sku"
                              control={control}
                              rules={{
                                   minLength: {
                                        value: 3,
                                        message: "minimum length must be 3"
                                   }
                              }}
                              defaultValue=""
                         />
                         <FormHelperText error={errors.sku ? true : false} style={{ marginLeft: "10px" }}>
                              <ErrorMessage errors={errors} name="sku" />
                         </FormHelperText>
                    </div>
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
                              control={control}
                              name='unit'
                              rules={{
                                   required: "This field is required",
                              }}
                              render={({ field }: any) => (
                                   <>
                                        <Select
                                             showSearch
                                             status={errors.unit ? "error" : ""}
                                             placeholder="Select a unit"
                                             optionFilterProp="children"
                                             filterOption={(input, option) =>
                                                  //@ts-ignore
                                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                             }
                                             defaultValue=""
                                             size='middle'
                                             {...field}
                                             style={{
                                                  width: "600px",
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
                         <FormHelperText error={errors.unit ? true : false} style={{ marginLeft: '10px' }}>
                              <ErrorMessage errors={errors} name="unit" />
                         </FormHelperText>
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