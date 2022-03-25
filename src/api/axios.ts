import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong!'
    )
);

export default axiosInstance;
