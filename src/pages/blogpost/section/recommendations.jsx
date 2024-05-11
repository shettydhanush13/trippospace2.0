import React from 'react';
import ProductCard from '../../../components/productcard';

const RecommendationsSection = ({ recommendations }) => {
  return (
    recommendations.length ? <>        
        <h4>Our Recommendations</h4>
        <div className='product-card-container'>
          {recommendations.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </> : <></>
  );
};

export default RecommendationsSection;