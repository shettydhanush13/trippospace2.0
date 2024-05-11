import React from 'react';

const ContentSection = ({ title, content }) => {
  return (
    <>
        <h2>{title}</h2>
        <p>{content}</p>
    </>
  );
};

export default ContentSection;
