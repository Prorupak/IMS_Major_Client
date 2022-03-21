/* eslint-disable no-unused-vars */
export interface IAuth {
  token: string | null;
  user: IUser | null;
}
export interface IUser {
  token?: string | null;
  id?: string;
  name?: string;
  email: string;
  password: string;
  phoneNumber: number;
  about?: string[];
  role?: string;
  history?: string[];
  isEmailVerified?: boolean;
  profilePicture?: Record<string, any>[];
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
  about?: string;
  role?: string;
  history?: string;
  isEmailVerified?: boolean;
}

export interface IFetchParams {
  offset?: number;
  limit?: number;
  skip?: number;
  query?: string;
  type?: string;
  sort?: 'asc' | 'desc';
}

export interface IProductsDetails {
  _id: string;
  id: string;
  name: string[];
  price: number;
  products: string[];
  brand: string[];
  quantity: number;
  description?: string;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  weight: number;
  images: Record<string, any>[];
  date: Date;
  isbn: string;
  salesInformation: {
    sellingPrice: number;
    account: string;
    description: string;
    tax: number;
  };
  purchaseInformation: {
    costPrice: number;
    account: string;
    description: string;
    tax: number;
  };
}

export interface IProductAction {
  GET_PRODUCTS: string;
  CREATE_PRODUCT: string;
  UPDATE_PRODUCT: string;
  DELETE_PRODUCT: string;
}

export type ICategories = {
  _id?: string;
  id?: string;
  name: string;
  description?: string;
  image?: Record<string, null>[];
  date?: Date;
  isDeleted?: boolean;
  multipleItems?: {
    attribute: string[] | string;
    options: string[] | string;
  };
};
export interface ICategoriesAction {
  GET_CATEGORIES: string;
  CREATE_CATEGORY: string;
  DELETE_CATEGORY: string;
  UPDATE_CATEGORY: string;
}

export interface IError {
  statusCode: number;
  data: any;
  error: {
    message: string;
    title: string;
    type: string;
  };
  success: boolean;
  timestamp: string | Date;
  [prop: string]: any;
}

export interface TLoading {
  isLoadingAuth: boolean;
  isLoadingAddProducts: boolean;
  isLoadingGetProducts: boolean;
  isLoadingAddCategories: boolean;
  isLoadingGetCategories: boolean;
}
