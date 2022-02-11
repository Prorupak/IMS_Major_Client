import { ICategories } from 'Interfaces/Interfaces';
import httpRequest from './Fetcher';

export const getCategories = () => {
  return httpRequest<ICategories[]>({
    method: 'GET',
    url: '/categories'
  });
};
