import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

const BlogPost = ({ post }) => {
  const { title, content, imageUrl } = post;
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
