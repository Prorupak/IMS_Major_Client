import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const useDelete = (url: string, path?: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const handleDelete = async () => {
    console.log('clicked');
    setLoading(true);
    try {
      await axios.delete(url);
      navigate(path);
    } catch (err: any) {
      console.log('err===>', err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleDelete
  };
};

export default useDelete;

