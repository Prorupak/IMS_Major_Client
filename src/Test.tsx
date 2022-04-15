// import axios from 'axios'
// import React from 'react'
// import Layout from 'layout/Layout'
// import { IProductsDetails } from 'Interfaces/Interfaces';


// const Test = () => {
//      var [test, setTest] = React.useState<IProductsDetails[]>([])
//      const [loading, setLoading] = React.useState<boolean>(false)
//      console.log('test', test)



//      const fetchData = () => {
//           axios.get('http://localhost:9001/api/products/62553f1a2e6e366f6f3fddce')
//                .then(res => {
//                     console.log('res', res.data)
//                     let data = res.data
//                     // push data to empty object

//                     setTest([...test, data])
//                     // console.log('empty', empty)
//                })
//                .catch(e => {
//                     console.log('product error', e)
//                })
//      }



//      React.useEffect(() => {
//           fetchData()
//      }, []);
//      return (
//           <Layout>{
//                loading ? ('loading....') : null
//           }</Layout>
//      )
// }

// export default Test

import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { ReactHookForm } from "context/ReactHookForms";
// import ClipLoader from "react-spinners/ClipLoader";

function App() {
     // const { register } = useForm();
     const { register, reset } = React.useContext(ReactHookForm);
     const location = useLocation();
     const [Joke, setJoke] = useState([] as any);
     const [Jokes, setJokes] = useState({} as any);
     const [loading, setLoading] = useState(false);

     // @ts-ignore
     const handle = location?.state?.handleClick;

     const fetchData = async () => {
          setLoading(true);
          var options: any = {
               method: "GET",
               url: "http://localhost:9001/api/products",
          };

          let data = await axios.request(options);
          console.log("data,", data.data);
          setJoke([...Joke, data.data]);
          setJokes({ ...Jokes, data: data.data });
          console.log("Jokess,", Jokes);
          reset({
               name: data.data.name,
          });
          console.log("Joke,", Joke);
          setLoading(false);
     };

     let jokesArray;
     if (Joke.length >= 1) {
          jokesArray = Joke.map((el: any) => {
               return (
                    <div
                         key={el.id}
                         style={{
                              width: "350px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              margin: "10px",
                              border: "2px solid green",
                              padding: "5px",
                         }}
                    >
                         <div style={{ width: "50px" }}>
                              {/* <img src={el.icon_url} style={{ objectFit: "cover" }} alt="" /> */}
                              {el.name}
                              <input {...register("name")} />
                         </div>
                         <h4>{el.sku} </h4>
                    </div>
               );
          });
     } else {
          jokesArray = "Click on the button to fetch Jokes";
     }

     // handle && fetchData();
     React.useEffect(() => {
          // console.log("handle", handle);
          fetchData();
     }, []);

     return (
          <div
               className="App"
               style={{
                    margin: "20px",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
               }}
          >
               <div>
               </div>
               <div>{loading ? "loading" : jokesArray}</div>
          </div>
     );
}

export default App;
