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
  _id?: string;
  id?: string;
  name?: string;
  brand?: string;
  quantity?: number;
  length?: number;
  breadth?: number;
  height?: number;
  description?: string;
  manufacturer?: string;
  sku?: string;
  unit?: string;
  returnable?: boolean;
  sellingPrice?: string;
  saleAccount?: string;
  sellDescription?: string;
  sellTax?: string;
  costPrice?: string;
  costAccount?: string;
  costDescription?: string;
  costTax?: string;
  dimensions?: string;
  dUnit?: string;
  weight?: number;
  wUnit?: string;
  images?: Record<string, any>[];
  date?: Date;
  isbn?: string;
  inventoryAccount?: string;
  openingStock?: number;
  openingStockPerUnit?: number;
  preferredVendor?: string;
  reorderPoint?: string
  salesInformation?: {
    sellingPrice?: number;
    account?: string;
    description?: string;
    tax?: number;
  };
  purchaseInformation?: {
    costPrice?: number;
    account?: string;
    description?: string;
    tax?: number;
  };
  inventoryTracking?: {
    inventoryAccount?: string;
    openingStock?: number;
    openingStockPerUnit?: number;
    preferredVendor?: string;
    reorderPoint?: string
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
