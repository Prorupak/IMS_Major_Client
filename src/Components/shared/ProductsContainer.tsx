import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ProductsContainer: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default ProductsContainer;
