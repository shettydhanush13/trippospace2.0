// LandingPage.js

import React from 'react';
import './styles.scss'; // Import the Sass file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Find unique items for your travel adventure</h1>
        <h2>browse by destination, season or special</h2>
        <div className="search-bar">
            <input type="text" placeholder="Search for travel clothing and accessories" />
            <button>Search </button>
        </div>
      </div>
      <div className="image-container">
        <img src="https://assets.api.uizard.io/api/cdn/stream/a8dc74e5-bce9-4445-b2a2-f4e54d40bb3d.png" alt="Travel fashion" />
      </div>
    </div>
  );
}

export default LandingPage;
