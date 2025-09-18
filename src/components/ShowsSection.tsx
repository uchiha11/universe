import React from 'react';

const ShowsSection: React.FC = () => {
  return (
    <section id="concerts" className="shows-section">
      <div className="container">
        <h2 className="section-title">Concerts</h2>
        
        <div className="video-wrapper">
          <div className="youtube-embed">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/kHb7zvMsTlQ?si=j2l_n6F6aXk6nBcg&autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;