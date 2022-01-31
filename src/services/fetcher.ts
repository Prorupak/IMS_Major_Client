/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
import axios, { AxiosRequestConfig } from 'axios';
import { logoutStart } from '../useReducer/action/authActions';

const imsUrl = 'http://localhost:9001';
// const imsApiVersion = 'v1';
axios.defaults.baseURL = `${imsUrl}/api`;
axios.defaults.withCredentials = false;

let isLogoutTriggered = false;

function resetIsLogoutTriggered() {
  isLogoutTriggered = false;
}

axios.interceptors.response.use(
  (response) => {
    if (response.status === 400) {
      alert('You are not authorized');
    }
    return response;
  },
  (error) => {
    console.log('error====', error.message);
    const { data, status } = error.message;
    if (
      status === 401 &&
      (data?.error?.type || '') !== 'INCORRECT_CREDENTIALS' &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      if (!isLogoutTriggered) {
        isLogoutTriggered = true;
        localStorage.dispatch(logoutStart(resetIsLogoutTriggered));
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
      console.log('request.data.data====', request.data.data);
    } catch (err: any) {
      reject(err?.response?.data || {});
    }
  });
};

export default httpRequest;
