import React from 'react';
import Tags from '../../../components/tag';
import SectionWrapper from './sectionWrapper';
// import ProductCard from '../../../components/productcard';

// const dummyProducts = [
//   {
//     id: 1,
//     name: 'Men\'s Casual Shirt',
//     price: '$29.99',
//     image: 'https://via.placeholder.com/300x400',
//   },
//   {
//     id: 2,
//     name: 'Women\'s Floral Dress',
//     price: '$39.99',
//     image: 'https://via.placeholder.com/300x400',
//   }
// ];

const ApparelSection = ({ data, genders, activeGender, setGender }) => {
  return (
    <SectionWrapper title="Apparel" data={data.length}>
        <Tags tags={genders} activeTag={activeGender} onClick={(tag) => setGender(tag)}/>
        <ul>
            {data.map((el) => <li>{el}</li>)}
        </ul>
        {/* <div className='product-card-container'>
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
    </SectionWrapper>
  );
};

export default ApparelSection;