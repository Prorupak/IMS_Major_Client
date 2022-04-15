import axios from 'axios';
import { CategoryData } from 'context/CategoryContext';
import { ProductData } from 'context/ProductContext';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

const useDelete = (url: string, path?: any) => {
  const navigate = useNavigate();
  // const [setCategoryDetails, categoryDetails] = React.useContext(CategoryData);
  // const [setProductDetails, productDetails] = React.useContext(ProductData);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const location = useLocation();

  // @ts-ignore
  const ids = location && location.state && location.state.catId;

  console.log('delete ids', ids);
  const handleDelete = async () => {
    console.log('clicked');
    setLoading(true);
    try {
      await axios.delete(url);
      if (path === '/products') {
        localStorage.removeItem('saveId');
      }
      if (path === '/details') {
        localStorage.removeItem('CateID');
      }
      navigate(path);
    } catch (err: any) {
      console.log('err===>', err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // handleDelete();
  }, [url, path]);

  return {
    loading,
    error,
    handleDelete
  };
};

export default useDelete;

























