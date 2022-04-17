import axios from 'axios'
import React from 'react'
import Layout from 'layout/Layout'
import { IProductsDetails } from 'Interfaces/Interfaces';


const Test = () => {
     var [test, setTest] = React.useState<IProductsDetails[]>([])
     const [loading, setLoading] = React.useState<boolean>(false)
     console.log('test', test)



     const fetchData = async () => {
          try {
               setLoading(true);
               const res = await axios.get('http://localhost:9001/api/products')
               if (res.data.length > 0) {
                    setTest(res.data)
               } else {
                    console.log('res', res.data)
                    setLoading(true)
               }
               setLoading(false);
          } catch (e) {
               setLoading(false);
               console.log('error', e)
          }

     }

     React.useLayoutEffect(() => {
          fetchData();
     }, [])

     console.log('test', test)





     return (
          <>
               {
                    test.length > 0 ? (
                         <Layout>

                              {
                                   loading ? ('loading....') : test.map((item: any) => {
                                        return (
                                             <div>
                                                  <h1>{item.name}</h1>
                                                  <h2>{item.description}</h2>
                                             </div>
                                        )
                                   })
                              }
                         </Layout>
                    ) : (
                         <div>
                                   <h1>Loading....</h1>
                              </div>
                    )
               }

          </>
     )
}

export default Test

