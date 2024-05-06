import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

const BlogSection = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Majestic Mountains',
      description: 'Embark on an adventure to discover the breathtaking beauty of the mountains.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 2,
      title: 'Discovering Hidden Gems in Coastal Villages',
      description: 'Experience the tranquility and charm of coastal villages nestled along pristine shores.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 3,
      title: 'Safari Adventure in the Heart of Africa',
      description: 'Encounter magnificent wildlife and immerse yourself in the raw beauty of the African wilderness.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 4,
      title: 'Cultural Exploration in Ancient Cities',
      description: 'Uncover the rich history and cultural heritage of ancient cities around the world.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 5,
      title: 'Island Hopping in the Caribbean Paradise',
      description: 'Indulge in the ultimate tropical getaway as you hop from one stunning island to another.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 6,
      title: 'Trekking through Lush Rainforests',
      description: 'Embark on a journey through lush rainforests teeming with exotic flora and fauna.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 7,
      title: 'Cruise Expedition to Polar Regions',
      description: 'Embark on an extraordinary expedition to the icy realms of the polar regions.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
    {
      id: 8,
      title: 'Backpacking Adventure across Europe',
      description: 'Experience the diversity and charm of Europe on an unforgettable backpacking journey.',
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    },
  ];

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
  }, [blogs.length]);

  return (
    <div className="blog-section">
      <h2>Latest Blogs</h2>
      <div className="blog-carousel">
        {blogs.map((blog, index) => (
          <div key={blog.id} className={`blog-card ${index === activeIndex ? 'active' : ''}`}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
