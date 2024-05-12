import React from 'react';
import './styles.scss';

const Tags = ({ tags, onClick, activeTag }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className={tag === activeTag ? 'tag activetag' : 'tag'} onClick={() => onClick(tag)}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
