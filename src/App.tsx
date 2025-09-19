import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import { Navigation, HeroSection, ShowsSection, FloatingMusicPlayer, TourDates, AboutSection, Footer, LoadingScreen } from './components';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simple fast loading - show content quickly for high traffic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced to 1 second for faster loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <TourDates />
      <ShowsSection />
      <AboutSection />
      <Footer />
      <FloatingMusicPlayer />
    </div>
  );
};

export default App;