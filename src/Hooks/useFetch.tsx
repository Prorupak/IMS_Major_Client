import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState('');
  const fetchData = () => {
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useFetch;
