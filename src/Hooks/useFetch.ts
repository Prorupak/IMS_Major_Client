import axios from 'axios';
import React from 'react';

const useFetch = (url: string) => {
  console.log('useFetch url', url);
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData([result.data]);
      // refreshPage();
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
    // refreshPage();
  }, [url]);
  return {
    data,
    loading,
    error
  };
};

export default useFetch;
















