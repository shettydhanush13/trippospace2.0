import React from 'react';
import Tags from '../../../components/tag';
import SectionWrapper from './sectionWrapper';
import RecommendationsSection from './recommendations';

const ApparelSection = ({ data, genders, activeGender, setGender }) => {
  return (
    <SectionWrapper title="Apparel" data={data[activeGender].productsList.length}>
        <Tags tags={genders} activeTag={activeGender} onClick={(tag) => setGender(tag)}/>
        <ul>
            {data[activeGender].productsList.map((el) => <li>{el}</li>)}
        </ul>
        <RecommendationsSection recommendations={data[activeGender].recommendations}/>
    </SectionWrapper>
  );
};

export default ApparelSection;