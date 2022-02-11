/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-parens */
import axios, { AxiosRequestConfig } from 'axios';

const foodieUrl = process.env.REACT_BASE_URL || 'http://localhost:9000';
axios.defaults.baseURL = `${foodieUrl}/api/`;
axios.defaults.withCredentials = false;

let isLogoutTriggered = false;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    if (
      status === 401 &&
      (data?.error?.type || '') !== 'INCORRECT_CREDENTIALS' &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      if (!isLogoutTriggered) {
        isLogoutTriggered = true;
      }
    }
    return Promise.reject(error);
  }
);

const httpRequest = <T>(req: AxiosRequestConfig): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios(req);

      resolve(request.data.data);
    } catch (e: any) {
      reject(e?.response?.data || {});
    }
  });
};

export default httpRequest;
