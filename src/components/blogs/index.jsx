import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const blogs = require('../../data/blogposts.json');

const BlogSection = () => {

  const navigate = useNavigate();

  // State for active blog index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle automatic sliding of blog cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide duration as needed (5000ms = 5 seconds)

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="blog-section">
      <h2>Explore our travel guides</h2>
      <div className="blog-carousel">
        {blogs.map((blog, index) => (
          <div key={blog.id} className={`blog-card ${index === activeIndex ? 'active' : ''}`} onClick={() => navigate(`/blog/${blog.id}`)}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
