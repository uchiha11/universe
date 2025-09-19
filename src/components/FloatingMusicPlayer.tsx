import React, { useState, useRef, useEffect } from 'react';

const FloatingMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.3); // Lower default volume
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);

  const attemptAutoplay = async () => {
    const audio = audioRef.current;
    if (!audio || autoplayAttempted) return;

    try {
      audio.volume = volume;
      audio.preload = 'auto';
      await audio.play();
      setIsPlaying(true);
      setAutoplayAttempted(true);
      console.log('Music autoplay successful');
    } catch (error) {
      console.log('Autoplay failed:', error);
      // Don't set autoplayAttempted to true so we can try again on user interaction
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try immediate autoplay
    attemptAutoplay();

    // Try autoplay after loading screen (1 second delay)
    const timer = setTimeout(attemptAutoplay, 1000);

    // Try autoplay on any user interaction
    const handleUserInteraction = () => {
      if (!isPlaying && !autoplayAttempted) {
        attemptAutoplay();
      }
    };

    // Listen for various user interaction events
    const events = ['click', 'touchstart', 'keydown', 'mousemove', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Try autoplay when page becomes visible (tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden && !isPlaying && !autoplayAttempted) {
        attemptAutoplay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [volume, isPlaying, autoplayAttempted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Play failed:', error);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className={`floating-music-player ${isExpanded ? 'expanded' : ''}`}>
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error('Audio loading error:', e);
          setIsPlaying(false);
        }}
        onLoadStart={() => console.log('Audio loading started')}
        onCanPlay={() => console.log('Audio can play')}
        onLoadedData={() => console.log('Audio loaded')}
      >
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      <div className="player-main">
        <button 
          className="play-toggle-btn"
          onClick={togglePlay}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? '⏸️' : '🎵'}
        </button>
        
        <button 
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          title="Music Controls"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className="player-controls-expanded">
          <div className="track-info">
            <div className="track-title">Background Music</div>
            <div className="artist-name">The U1niverse</div>
          </div>
          
          <div className="volume-control">
            <span className="volume-icon">🔊</span>
            <input
              type="range"
              className="volume-slider-mini"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMusicPlayer;