import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;

    setDuration(event.target.getDuration());
  };

  const play = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();

      setPlaying(true);
    }
  };

  const pause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();

      setPlaying(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playing) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playing]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="music-player">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />

      <div className="music-controls">
        <button onClick={play}>▶</button>

        <button onClick={pause}>⏸</button>
      </div>

      <div className="music-progress">
        <div
          className="music-progress-bar"
          style={{
            width: `${duration ? (currentTime / duration) * 100 : 0}%`,
          }}
        />
      </div>

      <div className="music-time">
        {formatTime(currentTime)}
        {" / "}
        {formatTime(duration)}
      </div>
    </div>
  );
};

export default YoutubePlayer;
