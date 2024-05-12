import React from 'react';
import SectionWrapper from './sectionWrapper';

const AccessoriesSection = ({ data }) => {
  return (
    <SectionWrapper title="Accessories" data={data.length}>
      <ul>
          {data.map((el) => <li>{el}</li>)}
      </ul>
    </SectionWrapper>
  );
};

export default AccessoriesSection;
