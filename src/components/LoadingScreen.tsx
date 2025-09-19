import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/heroText.webp" alt="The U1niverse" className="loading-logo-image" />
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          <p>Loading Experience...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;