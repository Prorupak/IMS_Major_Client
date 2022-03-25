/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-parens */
import axios from 'axios';

const foodieUrl = process.env.REACT_BASE_URL || 'http://localhost:9001';
axios.defaults.baseURL = `${foodieUrl}/api`;
axios.defaults.withCredentials = false;

const httpRequest = <T>(req: any): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios(req);
      console.log('req===>', request);

      resolve(request.data.data);
    } catch (e: any) {
      console.log('err===/', e);
      reject(e?.response?.data || { err: 'error' });
    }
  });
};

export default httpRequest;
