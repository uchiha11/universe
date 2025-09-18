import React from 'react';
import './styles/main.scss';
import { Navigation, HeroSection, TourDates, AboutSection, Footer } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <TourDates />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;