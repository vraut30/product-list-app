import React from 'react';
import { Product } from '../../hooks/useProducts';
import './Card.css';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" fetchPriority="high"/>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.description}</p>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <span className="card-rating">⭐ {product.rating.rate} ({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default Card; 