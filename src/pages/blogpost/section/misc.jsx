import React from 'react';
import SectionWrapper from './sectionWrapper';

const MiscSection = ({ data }) => {
  return (
    <SectionWrapper title="Misc" data={data.length}>
        <ul>
            {data.map((el) => <li>{el}</li>)}
        </ul>
    </SectionWrapper>
  );
};

export default MiscSection;
