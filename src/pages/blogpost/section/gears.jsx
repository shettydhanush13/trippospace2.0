import React from 'react';
import SectionWrapper from './sectionWrapper';

const GearsSection = ({ data }) => {
  return (
    <SectionWrapper title="Gears" data={data.length}>
        <ul>
            {data.map((el) => <li>{el}</li>)}
        </ul>
    </SectionWrapper>
  );
};

export default GearsSection;
