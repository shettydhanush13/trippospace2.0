import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import PageWrapper from '../pageWrapper';
import Tags from '../../components/tag';
import {
    AccessoriesSection,
    ApparelSection,
    ContentSection,
    GearsSection,
    MiscSection
} from './section';
import './styles.scss';
const blogs = require('../../data/data.json');

const BlogPost = () => {
  const location = useLocation();
  const { pathname } = location;
  const blogId = pathname.split('/')[2];
  const blog = blogs.find((blog) => blog.id === Number(blogId));
  const { place, imageUrl, guide } = blog;

  const seasons = Object.keys(guide);
  const genders = ["Women", "Men", "Children"];

  const [season, setSeason] = useState(seasons[0])
  const [activeGender, setActiveGender] = useState(genders[0])

  return (
    <PageWrapper>
        <div className="blog-post">
            <img src={imageUrl} alt={place} className="blog-image" />
            <div className="blog-content">
                <Tags tags={seasons} activeTag={season} onClick={(tag) => setSeason(tag)}/>
                <ContentSection title={guide[season].title} content={guide[season].content}/>
                <ApparelSection data={guide[season].apparel} genders={genders} activeGender={activeGender} setGender={(selected) => setActiveGender(selected)}/>
                <AccessoriesSection data={guide[season].accessories}/>
                <GearsSection data={guide[season].gears}/>
                <MiscSection data={guide[season].misc}/>
            </div>
        </div>
    </PageWrapper>
  );
};

export default BlogPost;
