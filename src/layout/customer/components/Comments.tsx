import { Timeline } from 'antd'
import moment from 'moment'
import { ReactHookForm } from 'context/ReactHookForms'
import React from 'react'

const Comments = () => {
     const [data, setData] = React.useState<any[]>([]);
     const { register, handleSubmit } = React.useContext(ReactHookForm)
     // const onSubmit = (data: any) => {
     //      console.log('data===>', data)
     //      // setData(data)
     // }

     // const onSubmit = React.useCallback(
     //      (data: any) => {
     //           data.preventDefault()
     //           console.log('data===>', data)
     //           setData(data)
     //      },
     //      [data]
     // );
     return (
          <>
               <form onSubmit={handleSubmit((e: any) => setData([e.name]))}>
                    <input type="text" {...register("name")} />
                    <button type="submit">Submit</button>
               </form>
               <Timeline mode={
                    'left'
               }>
                    {
                         data.map((item: any, idx: number) => (
                              <>
                                   <Timeline.Item key={idx}
                                        //  dot={ <Icon type="idcard" style={{ fontSize: '12px' }} /> }
                                        color="red">
                                        {item}
                                        <span>{moment(item.date).format("DD MMM YYYY")}</span>
                                   </Timeline.Item>                              </>
                         ))
                    }
               </Timeline>
          </>
     )
}

export default Comments