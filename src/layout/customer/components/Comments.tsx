import { Card, Spin, Timeline } from 'antd'
import moment from 'moment'
import { ReactHookForm } from 'context/ReactHookForms'
import React from 'react'
import { relative } from 'path'
import TextArea from 'antd/lib/input/TextArea'
import { Button, FormHelperText } from '@mui/material'
import { Item } from 'Themes/utilityThemes'
import { watch } from 'fs'
import { CustomerContext, CustomerData } from 'context/CustomerContext'

const Comments = () => {
     const [data, setData] = React.useState<any[]>([]);
     const { Customer, loading } = React.useContext(CustomerData);

     const { register, handleSubmit, reset, control, Controller, watch, errors } = React.useContext(ReactHookForm)

     console.log('Comment', Customer.comments)
     console.log('Comments', data)

     const onSubmit = (e: any) => {
          console.log('data', e)
     }

     React.useEffect(() => {
          if (Customer) {
               setData(Customer.comments)
          }
     }, [])

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
                                   {
                                        data?.length === 0 ? (
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
                                        ) : (
                                             <>
                                                       <Timeline.Item>
                                                            <Card>
                                                                 <div style={{ display: "flex", flexFlow: "column", gap: "5px" }}>
                                                                      <div>
                                                                           <Controller
                                                                                control={control}
                                                                                name="name"
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
                                             </>
                                        )
                                   }
                              </Timeline>
                         )
                              : (
                                   <Spin />
                              )
                    }
               </form>
          </>
     )
}

export default Comments