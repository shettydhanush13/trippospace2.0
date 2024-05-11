import React from 'react';
import './styles.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
