import React from 'react';
import './styles/main.scss';
import { Navigation, HeroSection, ShowsSection, FloatingMusicPlayer, TourDates, AboutSection, Footer } from './components';

const App: React.FC = () => {
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