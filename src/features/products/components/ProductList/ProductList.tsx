import React from 'react';
import { Product } from '../../hooks/useProducts';
import Card from '../Card/Card';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = React.memo(({ products }) => {
  return (
    <div className="card-grid">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ProductList; 