import React from 'react';
import './styles.scss';
import { useLocation } from 'react-router-dom';
import PageWrapper from '../pageWrapper';

const blogs = require('../../data/blogposts.json');

const BlogPost = () => {
  const location = useLocation();
  const { pathname } = location;
  const blogId = pathname.split('/')[2];
  const blog = blogs.find((blog) => blog.id === Number(blogId));
  const { title, content, imageUrl } = blog;

  return (
    <PageWrapper>
        <div className="blog-post">
            <img src={imageUrl} alt={title} className="blog-image" />
            <div className="blog-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </PageWrapper>
  );
};

export default BlogPost;
