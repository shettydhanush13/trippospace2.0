import React from 'react';
import './styles.scss';
import PageWrapper from '../pageWrapper';

const AboutUs = () => {
  return (
    <PageWrapper>
        <div className="about-us">
            <div className="container">
                <h1>About Trippospace</h1>
                <p>
                Welcome to TrippoSpace, your ultimate destination for travel fashion inspiration tailored to your destination and the season.
                </p>
                <p>
                At TrippoSpace, we understand that what you wear on your travels is not just about style; it's also about practicality and comfort. Whether you're exploring the bustling streets of a city, lounging on a tropical beach, or trekking through rugged mountains, we've got you covered with the perfect outfits and accessories.
                </p>
                <p>
                Our team of travel experts curates fashion ideas that blend functionality, style, and versatility, ensuring that you look and feel your best on every journey.
                </p>
                <p>
                In addition to outfit suggestions, we also provide links to essential products you'll need for your trip, from durable backpacks and comfortable shoes to UV-protective sunglasses and travel-sized toiletries. With TrippoSpace, packing for your next adventure has never been easier.
                </p>
                <p>
                Start exploring our fashion guides today and elevate your travel style with TrippoSpace!
                </p>
            </div>
        </div>
    </PageWrapper>
  );
};

export default AboutUs;
