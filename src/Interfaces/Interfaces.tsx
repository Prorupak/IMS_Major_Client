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
  length?: number;
  breadth?: number;
  height?: number;
  description?: string;
  manufacturer?: string;
  sku?: string;
  unit?: string;
  returnable?: boolean;
  sellingPrice?: string;
  salesAccount?: string;
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
  inventoryAccount?: string;
  openingStock?: number;
  openingStockRate?: number;
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

export interface ICustomer {
  _id?: string;
  id?: string;
  customerType?: string;
  primaryName?: {
    firstName?: string;
    lastName?: string;
    salutation?: string;
  };
  customerDisplayName?: string;
  email?: string;
  phone?: number;
  website?: string;
  otherDetails: {
    currency: string;
    TaxRate?: number;
    paymentTerms?: string;
    twitter?: string;
    facebook?: string;
    phone?: number;
  },
  address?: [
    billingAddress: {
      attention?: string;
      addressLine1?: string;
      addressLine2?: string;
      city?: string;
      state?: string;
      country?: string;
      zipCode?: number;
      phone: number;
    },
    shippingAddress: {
      attention?: string;
      addressLine1?: string;
      addressLine2?: string;
      city?: string;
      state?: string;
      country?: string;
      zipCode?: number;
      phone: number;
    },
  ],
  date?: Date;
  remarks?: string;
}
