import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useLocation } from 'react-router-dom';

const blogs = require('../../data/blogposts.json');

const BlogPost = () => {
  const location = useLocation();
  const { pathname } = location;
  const blogId = pathname.split('/')[2];
  const blog = blogs.find((blog) => blog.id === Number(blogId));
  const { title, content, imageUrl } = blog;
  return (
    <>
        <Header/>
            <div className="blog-post">
                <img src={imageUrl} alt={title} className="blog-image" />
                <div className="blog-content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        <Footer/>
    </>
  );
};

export default BlogPost;
