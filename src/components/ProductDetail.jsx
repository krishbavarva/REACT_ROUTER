import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let { productId } = useParams();

  const product = { id: productId, name: `Product ${productId}`, description: `Description for Product ${productId}` };

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
