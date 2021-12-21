/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import React, { createContext } from 'react';

export const userContext = createContext({});

interface Props {
  _id?: string;
  username: string;
}

export const UsersContext = (props: any) => {
  const [users, setUsers] = React.useState([] as Props[]);

  const fetchUser = async () => {
    const response = await axios.get('http://localhost:5000/username');
    setUsers(response.data);
    console.log(response.data);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);
  return (
    <userContext.Provider value={users}>{props.children}</userContext.Provider>
  );
};
