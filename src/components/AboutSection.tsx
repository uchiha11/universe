import React, { useRef, useEffect, useState } from 'react';

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log('About section video loaded successfully');
      setVideoLoaded(true);
      setVideoError(false);
      
      // Try to play the video once it's loaded
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('About section video autoplay failed (expected):', error);
          // Autoplay failed, but that's okay - user can interact to play
        });
      }
    };

    const handleError = (error: Event) => {
      console.error('About section video failed to load:', error);
      setVideoError(true);
      setVideoLoaded(false);
    };

    const handleCanPlay = () => {
      console.log('About section video can start playing');
      setVideoLoaded(true);
    };

    // Add click handler to play video on user interaction
    const handleClick = () => {
      if (video.paused) {
        video.play().catch(console.error);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('click', handleClick);

    // Try to load the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <video
        ref={videoRef}
        className="about-section-video"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="About Section Background Animation"
        style={{
          display: videoError ? 'none' : 'block',
          cursor: 'pointer'
        }}
      >
        <source src="/u2.webm" type="video/webm" />
        <source src="/u2.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Show loading indicator while video is loading */}
      {!videoLoaded && !videoError && (
        <div className="about-section-video-loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      
      <div className="about-section-content">
        <div className="container">
          <div className="about-content">
            <h2>About The U1niverse</h2>
            <p>
              <strong>U1NIVERSE</strong> is the global creative space of <strong>Yuvan Shankar Raja</strong>. Built on a journey that has redefined soundtracks and live music experiences, <strong>U1NIVERSE</strong> is where Yuvan's music, artistry, and community come together without boundaries.
            </p>
            <p>
              More than just <strong>concerts</strong>, <strong>U1NIVERSE</strong> is a celebration of stories, emotions, and cultures through music. From chart-topping film compositions to independent singles, and from intimate unplugged sessions to massive <strong>world tours</strong>, every project under <strong>U1NIVERSE</strong> reflects Yuvan's belief that music is not just heard, but felt.
            </p>
            <p>
              Driven by passion and powered by fans across the world, <strong>U1NIVERSE</strong> is also a platform for collaborations — bringing together artists, genres, and generations on one stage. It is about creating timeless experiences, connecting people across continents, and building a living legacy that grows louder with every beat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;``