import React, { useRef, useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      setVideoLoaded(true);
      setVideoError(false);
      
      // Try to play the video once it's loaded
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Video autoplay failed (expected):', error);
          // Autoplay failed, but that's okay - user can interact to play
        });
      }
    };

    const handleError = (error: Event) => {
      console.error('Video failed to load:', error);
      setVideoError(true);
      setVideoLoaded(false);
    };

    const handleCanPlay = () => {
      console.log('Video can start playing');
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
    <section id="home" className="hero-banner">
      <div className="hero-content">
        <video
          ref={videoRef}
          className="artist-name-video"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="The U1niverse - Official Music Artist Animation"
          style={{
            display: videoError ? 'none' : 'block',
            cursor: 'pointer'
          }}
        >
          <source src="/u.webm" type="video/webm" />
          <source src="/u.webm" type="video/mp4" />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Show loading indicator while video is loading */}
        {!videoLoaded && !videoError && (
          <div className="video-loading-overlay">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          </div>
        )}
        
        <div className="hero-overlay">
          <div className="hero-text">
            <img
              src="/heroText.webp"
              alt="The U1niverse - Official Music Artist Logo"
              className="artist-name-image"
            />
            <h1 className="sr-only">YSR Yuvan Shankar Raja U1niverse - Official Concert Tours & Live Shows</h1>
            <p className="sr-only">Book tickets for YSR Yuvan Shankar Raja U1niverse concerts. Experience the legendary music composer's live performances and tour dates across India and worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;