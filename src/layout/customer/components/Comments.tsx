import { Card, notification, Spin, Timeline } from 'antd'
import moment from 'moment'
import { ReactHookForm } from 'context/ReactHookForms'
import React from 'react'
import { relative } from 'path'
import TextArea from 'antd/lib/input/TextArea'
import { Button, FormHelperText } from '@mui/material'
import { Item } from 'Themes/utilityThemes'
import { watch } from 'fs'
import { CustomerContext, CustomerData } from 'context/CustomerContext'
import usePost from 'Hooks/usePost'
import axios from 'axios'

const Comments = () => {
     const [data, setData] = React.useState<any[]>([]);
     const { Customer, loading } = React.useContext(CustomerData);

     const { register, handleSubmit, reset, control, Controller, watch, errors } = React.useContext(ReactHookForm)

     console.log('Comment', Customer.id)
     // console.log('Comments', data?.map((d: any) => d.map((dn: any) => dn.comments.map((dn: any) => dn.comment))))

     const close = () => {
          // navigate('/products')
     };

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
               notification.open({
                    type: 'success',
                    message: "Comment added successfully",
                    key,
                    duration: 5,
                    onClose: close,
               });
          }
     }

     const onSubmit = (data: any) => {
          console.log('data===>', data.sellDescription);
          const PData = {
               comments: [{
                    comment: data.comment
               }]
          };
          console.log('PData', PData);


          const postData = async () => {
               try {
                    const res = await axios.post(`http://localhost:9001/api/customer/${Customer.id}/comments`, PData);
                    console.log('res', res);
                    if (res.status === 200) {
                         openNotification(res);
                    }
               } catch (error) {
                    console.log('error', error);
                    openNotification(null, error);
               }
          }

          return postData();

     }

     const fetchData = async () => {
          try {
               const res = await axios.get(`http://localhost:9001/api/customer/${Customer.id}/comments`);
               console.log('res', res.data.comments.map((d: any) => d.comments.map((dn: any) => dn.comment)));
               setData(res.data.comments.map((d: any) => d.comments));
          } catch (error) {
               console.log('error', error);
               openNotification(null, error);
          }
     }

     React.useEffect(() => {
          fetchData();
     }, [Customer])

     const momentYYMMDD = (date?: any) => moment().format('YYYY-MM-DD')
     const momentYYMMDDHHMM = (date?: any) => moment().format('HH:mm')
     const momentAMPM = (date?: any) => moment().format('a')

     console.log()

     return (
          <>
               <form onSubmit={handleSubmit((e: any) => onSubmit(e))}
                    style={{
                         width: '50%',
                         position: "relative",
                         top: 50,
                         left: 100
                    }}
               >
                    {
                         data?.length > 0 ? (
                              <Timeline>

                                                       <Timeline.Item>
                                                            <Card>
                                                                 <div style={{ display: "flex", flexFlow: "column", gap: "5px" }}>
                                                                      <div>
                                                                           <Controller
                                                                                control={control}
                                                            name="comment"
                                                                                rules={{ required: true }}
                                                                                render={({ field }: any) => (
                                                                                     <TextArea showCount maxLength={100} {...field} />
                                                                                )}
                                                                           />
                                                                           <FormHelperText>(For internal use only)</FormHelperText>
                                                                      </div>
                                                                      <Button type="submit" variant='contained' size="small" sx={{ width: '20%' }}>Submit</Button>
                                                                 </div>
                                                            </Card>
                                                       </Timeline.Item>
                                                       {
                                                            data?.map((item: any, index: number) => (
                                                                 <Timeline.Item key={index}>
                                                                      <p>{item.comment}</p>
                                                                      <Item fontWeight='400'>
                                                                           {item.createdAt}{' by '}
                                                                           <Item fontWeight='500'>
                                                                                {item.createdBy}
                                                                           </Item>
                                                                      </Item>
                                                                 </Timeline.Item>
                                                            ))
                                   }
                              </Timeline>
                         )
                              : (
                                   <>
                                        <div style={{ display: "flex", flexFlow: "column", gap: "5px" }}>
                                             <div>
                                                  <Controller
                                                       control={control}
                                                       name="comment"
                                                       rules={{ required: true }}
                                                       render={({ field }: any) => (
                                                            <TextArea status={errors.comment ? "error" : ""} showCount maxLength={100} {...field} />
                                                       )}
                                                  />
                                                  <FormHelperText>(For internal use only)</FormHelperText>
                                             </div>
                                             <Button type="submit" variant='contained' size="small" sx={{ width: '20%' }}>Submit</Button>
                                        </div>
                                   </>
                              )
                    }
                    {data?.map((item: any, index: number) => (
                         <>
                              <p>{item.comment}</p>

                         </>
                    ))}

               </form>
          </>
     )
}

export default Comments