import React, { useState, useRef, useEffect } from 'react';

const FloatingMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play when component mounts
    const playAudio = async () => {
      try {
        audio.volume = volume;
        audio.preload = 'metadata'; // Only load metadata initially
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay failed:', error);
        // Autoplay failed, wait for user interaction
      }
    };

    // Try to autoplay after a short delay
    const timer = setTimeout(playAudio, 1000);

    return () => clearTimeout(timer);
  }, [volume]);

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
        src="/music.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      
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