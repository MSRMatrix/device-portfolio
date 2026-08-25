import { useContext } from "react";
import { AudioContext } from "@/context/AudioContext";
import Icon from "@/components/Icon";

const AudioSettings = () => {
  const { audioContext, setAudioContext } = useContext(AudioContext);

  const changeVolume = (value) => {
    setAudioContext((prev) => ({
      ...prev,
      volume: value,
      muted: value === 0,
    }));
  };

  const toggleMute = () => {
    setAudioContext((prev) => ({
      ...prev,
      muted: !prev.muted,
      volume: prev.muted ? 0.2 : 0,
    }));
  };

  const togglePlaying = () => {
    setAudioContext((prev) => ({
      ...prev,
      playing: !prev.playing,
    }));
  };

  return (
    <div className="sound-settings">
      <div className="sound-setting">
        <span>Lautstärke</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={audioContext.volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
        />

        <span>{Math.round(audioContext.volume * 100)}%</span>
      </div>

      <button onClick={toggleMute}>
        <Icon
          iconName={audioContext.muted ? "faVolumeXmark" : "faVolumeHigh"}
        />
      </button>

      <button onClick={togglePlaying}>
        <Icon iconName={audioContext.playing ? "faPause" : "faPlay"} />
      </button>
    </div>
  );
};

export default AudioSettings;
