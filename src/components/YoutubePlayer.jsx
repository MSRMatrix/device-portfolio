import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ song }) => {
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playing) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div className="music-player">
      <YouTube
        videoId={song.youtube}
        opts={{
          height: "0",
          width: "0",
        }}
        onReady={(event) => {
          playerRef.current = event.target;

          setDuration(event.target.getDuration());
        }}
      />

      <h3>{song.title}</h3>

      <button onClick={playing ? pause : play}>{playing ? "⏸" : "▶"}</button>

      <div className="music-progress">
        <div
          className="music-progress-bar"
          style={{
            width: `${duration ? (currentTime / duration) * 100 : 0}%`,
          }}
        />

        <div className="music-time">
          {formatTime(currentTime)}

          {" / "}

          {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};
export default YoutubePlayer;
