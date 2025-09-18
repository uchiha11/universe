import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import { Navigation, HeroSection, ShowsSection, FloatingMusicPlayer, TourDates, AboutSection, Footer, LoadingScreen } from './components';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadAssets = async () => {
      // Priority assets that need to load first
      const criticalAssets = [
        '/heroText.png',
        '/u.gif'
      ];
      
      // Non-critical assets that can load in background
      const nonCriticalAssets = [
        '/music.mp3',
        '/universe.jpg',
        '/fonts/suisse-intl-600.woff2'
      ];

      const loadAsset = (asset: string) => {
        return new Promise((resolve, reject) => {
          if (asset.endsWith('.mp3')) {
            // Preload audio with reduced buffer
            const audio = new Audio();
            audio.preload = 'metadata'; // Only load metadata, not full audio
            audio.onloadedmetadata = () => resolve(asset);
            audio.onerror = () => reject(asset);
            audio.src = asset;
          } else if (asset.endsWith('.woff2')) {
            // Preload font
            const font = new FontFace('Suisse International', `url(${asset})`);
            font.load().then(() => {
              document.fonts.add(font);
              resolve(asset);
            }).catch(() => reject(asset));
          } else {
            // Preload images/gifs
            const img = new Image();
            img.onload = () => resolve(asset);
            img.onerror = () => reject(asset);
            img.src = asset;
          }
        });
      };

      try {
        // Load critical assets first
        await Promise.all(criticalAssets.map(loadAsset));
        
        // Hide loading screen after critical assets are loaded
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
        // Load non-critical assets in background
        Promise.all(nonCriticalAssets.map(loadAsset)).catch(error => {
          console.log('Some non-critical assets failed to load:', error);
        });
        
      } catch (error) {
        console.log('Critical assets failed to load:', error);
        // Still hide loading screen after timeout
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    preloadAssets();
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