type TProduct = {
     name: {
          required: string;
          minLength: {
               value: number;
               message: string;
          };
          pattern: {
               value: RegExp;
               message: string;
          };
     };
     description: {
          minLength: {
               value: number;
               message: string;
          };
          maxLength: {
               value: number;
               message: string;
          };
     };
     sku: {
          minLength: {
               value: number;
               message: string;
          }
          maxLength: {
               value: number;
               message: string;
          }
     };
     costPrice: {
          required: string;
          pattern: {
               value: RegExp;
               message: string;
          }
          minLength: {
               value: number;
               message: string;
          }
     };
     sellingPrice: {
          required: string;
          pattern: {
               value: RegExp;
               message: string;
          }
          minLength: {
               value: number;
               message: string;
          }
     };
     unit: {
          required: string;
     }
};

export const ProductValidation: TProduct = {
     name: {
          required: "Name is required",
          minLength: {
               value: 3,
               message: "Name must be at least 3 characters",
          },
          pattern: {
               value: /^[a-zA-Z ]+$/,
               message: "Name must be alphabetical",
          }
     },
     description: {
          minLength: {
               value: 3,
               message: "Description must be at least 3 characters",
          },
          maxLength: {
               value: 100,
               message: "Description must be at most 100 characters",
          },
     },
     sku: {
          minLength: {
               value: 3,
               message: "SKU must be at least 3 characters",
          },
          maxLength: {
               value: 8,
               message: "SKU must be at most 8 characters",
          }
     },
     costPrice: {
          required: "Cost Price is required",
          pattern: {
               value: /^[0-9]*\.?[0-9]*$/,
               message: "Cost Price must be a number",
          },
          minLength: {
               value: 1,
               message: "Cost Price must be at least 1 character",
          }
     },
     sellingPrice: {
          required: "Selling Price is required",
          pattern: {
               value: /^[0-9]*\.?[0-9]*$/,
               message: "Selling Price must be a number",
          },
          minLength: {
               value: 1,
               message: "Selling Price must be at least 1 character",
          }
     },
     unit: {
          required: "Unit is required",
     }
}