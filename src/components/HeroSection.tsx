import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-banner">
      <div className="hero-content">
        <img 
          src="/u.gif" 
          alt="The U1niverse Animation" 
          className="artist-name-video"
        />
        <div className="hero-overlay">
          <div className="hero-text">
            <img src="/heroText.png" alt="The U1niverse" className="artist-name-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;