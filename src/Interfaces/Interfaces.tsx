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
  about?: string;
  role?: string;
  history?: string;
  isEmailVerified?: boolean;
  profilePicture?: Record<string, any>[];
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  about?: string;
  role?: string;
  history?: string;
  isEmailVerified?: boolean;
}

export interface IProductsDetails {
  _id: string;
  id: string;
  name: string;
  price: number;
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
