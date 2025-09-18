import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-banner">
      <div className="hero-content">
        {/* <img
          src="/universe.jpg"
          alt="The U1niverse"
          className="hero-image desktop"
        /> */}
        <video src="/u.mp4" autoPlay muted loop className="artist-name-video" />
        <img
          src="/universe.jpg"
          alt="The U1niverse"
          className="hero-image mobile"
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