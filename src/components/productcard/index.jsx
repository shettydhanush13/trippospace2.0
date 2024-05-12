import React from 'react';
import './styles.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" onClick={()=> window.open(product.productLink, "_blank")}>
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
