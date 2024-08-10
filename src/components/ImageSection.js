import React from 'react';
import sliderImage from '../assets/images/slider-2.jpg';

const ImageSection = () => {
  return (
    <section className="image-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <img 
        src={sliderImage} 
        className="img-fluid" 
        alt="Gym" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="heading-container" style={{ 
        position: 'absolute', 
        top: '50%', 
        right: '20px', 
        transform: 'translateY(-50%)', 
        color: 'white', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '10px', 
        borderRadius: '5px'
      }}>
        <h1>Build Muscle, Build Confidence, Transform Life</h1>
      </div>
    </section>
  );
};

export default ImageSection;
