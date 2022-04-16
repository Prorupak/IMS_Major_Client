
import React, { useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TiPlus } from 'react-icons/ti';
import { Icon as Icons, SmallIcon, Text } from 'Themes/utilityThemes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
     Autocomplete,
     Checkbox,
     Chip,
     FormHelperText,
     TextareaAutosize,
     TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { CategoryContext } from 'context/CategoryContext';
import AddCategories from './AddCategories';
import { Button, Input, notification } from 'antd';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useLocation } from 'react-router';
import { ErrorMessage } from '@hookform/error-message';
import TextArea from 'antd/lib/input/TextArea';
import { ReactHookForm } from 'context/ReactHookForms';
import { useParams } from 'react-router';

const Grid = styled(motion.form).attrs({})`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content auto;
  grid-template-rows: 100% auto;
  .image {
    grid-area: right;
  }
`;

const Top = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  gap: var(--spacing-20);

  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const ItemWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  min-height: 10px;
  grid-area: left;
  gap: 100px;
`;

const Error = styled(motion.div) <{ error: any }>`
  display: ${({ error }) => (error ? 'flex' : 'none')};
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

const UpdateCategories = () => {
     const { Controller, errors, control, reset, handleSubmit } = React.useContext(ReactHookForm);

     const location = useLocation();

     const { categoryDetails } = React.useContext(CategoryContext)
     const [loading, setLoading] = React.useState(false);


     const ProID = localStorage.getItem('CateID');

     // @ts-ignore
     const pathName = location.state?.cate;

     console.log('pathName===>', pathName);

     const [product, setProduct] = React.useState<any>({});

     const { id } = useParams();





     const navigate = useNavigate();


     const close = () => {
          // navigate('/products')
     };

     const onNavigate = (res: any) => {
          navigate('/details', { state: res })
     }

     const openNotification = (res: any, error?: any) => {
          console.log('productNae', res)
          if (error) {
               notification.error({
                    message: 'Error',
                    description: res,
                    placement: 'bottomRight',
                    duration: 2,
               });
          } else {
               const key = `open${Date.now()}`;
               const btn = (
                    <div style={{ display: "flex", alignItems: 'center', gap: '5px' }}>
                         <Button type="primary" size="small" onClick={onNavigate}>
                              View Details
                         </Button>
                         <Button type="primary" size="small">
                              Add More
                         </Button>
                    </div>
               );
               notification.open({
                    type: 'success',
                    message: res ? res.data.name + ' updated successfully' : error,
                    btn,
                    key,
                    duration: 5,
                    onClose: close,
               });
          }
     }


     console.log('uesParams', id);

     const onSubmit = (data: any) => {
          console.log('data===>', data.sellDescription);
          console.log('submitClicked')
          const PData = {
               name: data.catName,
               description: data.catDes,
          };
          console.log('PData', PData);


          const postData = async (e?: any) => {
               e.preventDefault();
               try {
                    const res = await axios.put(`http://localhost:9001/api/categories/${ProID}`, PData);
                    console.log('updateRes', res);
                    if (res.status === 200) {
                         const productName = res.data.name
                         console.log('resdata', res.data.name);
                         openNotification(res);
                         navigate('/details');
                    }


               } catch (error) {
                    console.log('error', error);
                    openNotification(null, error);
               }
          }

          return postData();

     }

     return (
          <>
               <Grid>
                    <Top>
                         <ItemWrapper>
                              <Text textColor="var(--color-required)" width="20%">
                                   Name*
                              </Text>
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                                   <Controller
                                        render={({ field }: any) => (
                                             <Input autoComplete='off' status={errors.catName ? "error" : ""} allowClear {...field} style={{ width: "600px" }} />

                                        )}
                                        name={"catName"}
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
                                   <FormHelperText error={errors.catName ? true : false} style={{ marginLeft: "10px" }}>
                                        <ErrorMessage errors={errors} name="catName" />
                                   </FormHelperText>
                              </div>
                         </ItemWrapper>
                         <ItemWrapper>
                              <Text textColor="var(--color-primary-dark)" width="20%">
                                   Description
                              </Text>
                              <div style={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column' }}>

                                   <Controller
                                        render={({ field }: any) => (
                                             <TextArea autoComplete='off' status={errors.catDes ? "error" : ""} allowClear {...field} style={{ width: "600px" }} />

                                        )}
                                        name="catDes"
                                        control={control}
                                        rules={{
                                             minLength: {
                                                  value: 10,
                                                  message: "minimum length must be 10"
                                             }
                                        }}
                                        defaultValue=""
                                   />
                                   <FormHelperText error={errors.catDes ? true : false} style={{ marginLeft: "10px" }}>
                                        <ErrorMessage errors={errors} name="catDes" />
                                   </FormHelperText>
                              </div>
                         </ItemWrapper>
                    </Top>
               </Grid>
          </>
     );
};

export default UpdateCategories;










