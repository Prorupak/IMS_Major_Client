import { IRegister, IProductsDetails, IUser } from '../Interfaces/Interfaces';
import httpRequest from './fetcher';

export const login = (email: string, password: string) => {
  return httpRequest<IUser>({
    method: 'POST',
    url: '/auth/login',
    data: {
      email,
      password
    }
  });
};

export const checkToken = () => {
  return httpRequest<{ auth: IUser }>({
    method: 'GET',
    url: '/auth/check-token'
  });
};

// eslint-disable-next-line object-curly-newline
export const register = ({ name, email, password, about = '' }: IRegister) => {
  return httpRequest<IUser>({
    method: 'POST',
    url: '/auth/register',
    data: {
      name,
      email,
      password,
      about
    }
  });
};

// ----------------- Post Methods -----------------

// ------ Products ------
export const getProductById = (id: string) => {
  return httpRequest<IProductsDetails>({
    method: 'GET',
    url: `/products/${id}`
  });
};

export const createProducts = (post: FormData) => {
  return httpRequest<IProductsDetails>({
    method: 'POST',
    url: '/products',
    data: post
  });
};

export const getProducts = () => {
  return httpRequest<IProductsDetails[]>({
    method: 'GET',
    url: '/products'
  });
};

export const updateProducts = (
  postID: string,
  updated: Partial<IProductsDetails>
) => {
  return httpRequest<IProductsDetails>({
    method: 'PUT',
    url: `/products/${postID}`,
    data: updated
  });
};

export const deleteProducts = (postID: string) => {
  return httpRequest<IProductsDetails>({
    method: 'DELETE',
    url: `/products/${postID}`
  });
};
