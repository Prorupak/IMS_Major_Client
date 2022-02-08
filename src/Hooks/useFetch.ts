import axios from 'axios';
import React from 'react';

const useFetch = (url: string, actionTypes: any, context: any) => {
  const { data, dispatch } = React.useContext(context);
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      dispatch({ type: actionTypes, payload: { data: res.data } });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [url, actionTypes, context]);

  return {
    data
  };
};

export default useFetch;
