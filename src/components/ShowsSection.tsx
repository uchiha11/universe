import React, { useState, useRef, useEffect } from 'react';

const ShowsSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Load video after a short delay to improve performance
          setTimeout(() => {
            setIsVideoLoaded(true);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  return (
    <section id="concerts" className="shows-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Concerts</h2>
        
        <div className="videos-grid">
          <div className="video-wrapper">
            <div
              className="youtube-embed video-link"
              onClick={() => window.open('https://www.youtube.com/watch?v=kHb7zvMsTlQ', '_blank')}
            >
              {isVideoLoaded ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/kHb7zvMsTlQ?si=j2l_n6F6aXk6nBcg&autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player - Concert 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-loading">
                    <div className="play-icon">▶</div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="video-wrapper">
            <div
              className="youtube-embed video-link"
              onClick={() => window.open('https://www.youtube.com/watch?v=DQe5wdxBUR0', '_blank')}
            >
              {isVideoLoaded ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/DQe5wdxBUR0?si=W4JLDq1dYsj6XEZk&autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player - Concert 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-loading">
                    <div className="play-icon">▶</div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="video-wrapper">
            <div
              className="youtube-embed video-link"
              onClick={() => window.open('https://www.youtube.com/watch?v=2mMdvIJZMHg', '_blank')}
            >
              {isVideoLoaded ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/2mMdvIJZMHg?si=abc123&autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player - Concert 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-loading">
                    <div className="play-icon">▶</div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="video-wrapper">
            <div
              className="youtube-embed video-link"
              onClick={() => window.open('https://www.youtube.com/watch?v=KgxqSoDudok', '_blank')}
            >
              {isVideoLoaded ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/KgxqSoDudok?si=def456&autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player - Concert 4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-loading">
                    <div className="play-icon">▶</div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="video-wrapper">
            <div
              className="youtube-embed video-link"
              onClick={() => window.open('https://www.youtube.com/watch?v=USh_Z7khzLE', '_blank')}
            >
              {isVideoLoaded ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/USh_Z7khzLE?si=ghi789&autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player - Concert 5"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-loading">
                    <div className="play-icon">▶</div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;