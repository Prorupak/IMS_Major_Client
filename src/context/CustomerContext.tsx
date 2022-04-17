import axios from 'axios';
import useToggle from 'Hooks/useToggle';
import { ICustomer } from 'Interfaces/Interfaces';
import React from 'react';



export const CustomerData = React.createContext<any>({});
export const CustomerContext = React.createContext<{
     data: ICustomer[];
     setData: (data: ICustomer[]) => void;
     loading: boolean

}>({
     data: [],
     setData: () => { },
     loading: true,
});
export const CustomerToggle = React.createContext<any>({});

type IProps = {
     children: React.ReactNode;
};

export const CustomerProvider: React.FC<IProps> = ({ children }) => {
     const [data, setData] = React.useState<ICustomer[]>(
          []
     );

     const [loading, setLoading] = React.useState<boolean>(false);
     const [error, setError] = React.useState<string>('');

     const fetchData = async () => {
          try {
               setLoading(true);
               let res = await axios.get('http://localhost:9001/api/customer');
               setData(res.data);
               console.log('Context', data)
               setLoading(false);
          } catch (e: any) {
               setLoading(false);
               setError(e);
               console.log('product error', e);
          }

     }

     React.useEffect(() => {
          fetchData();
     }, []);

     const [Customer, setCustomer] = React.useState<any>({});

     const { toggleHandle, value, handleOpen } = useToggle('toggle', false);

     console.log('Addsec', Customer);


     return (
          <>
               <CustomerToggle.Provider value={{ toggleHandle, value, handleOpen }}>
                    <CustomerContext.Provider
                         value={{
                              data,
                              setData,
                              loading
                         }}>
                         <CustomerData.Provider value={{ Customer, setCustomer, loading }}>
                              {children}
                         </CustomerData.Provider>
                    </CustomerContext.Provider>
               </CustomerToggle.Provider>
          </>
     );
};

