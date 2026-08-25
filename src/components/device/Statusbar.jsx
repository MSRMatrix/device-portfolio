import { useContext, useEffect, useState } from "react";
import Camera from "./Camera";
import Icon from "../Icon";
import { AudioContext } from "../../context/AudioContext";

const Staturbar = ({ theme, setTheme, intro }) => {
  const max = 100;

  const [percent] = useState(() => Math.floor(Math.random() * (max + 1)));

  const [clock, setClock] = useState(new Date());
  const { audioContext, setAudioContext } = useContext(AudioContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const themeMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMute = () => {
    setAudioContext((prev) => ({
      ...prev,
      muted: !prev.muted,
      volume: prev.muted ? 0.2 : 0,
    }));
  };

  return (
    <div className="statusbar">
      <Camera />
      {intro ? (
        <></>
      ) : (
        <>
          <span className="status-time">
            {clock.toLocaleTimeString("de-DE", {
              hour: "2-digit",
              minute: "2-digit",
            })}

            <div onClick={toggleMute}>
              <Icon
                iconName={audioContext.muted ? "faVolumeXmark" : "faVolumeHigh"}
              />
            </div>
          </span>
          <div className="status-icons">
            <div className="battery">
              <div
                className="battery-level"
                style={{
                  width: `${percent}%`,
                  background:
                    percent <= 20
                      ? "#FF3B30"
                      : percent <= 50
                        ? "#FFD60A"
                        : "#34C759",
                }}
              />
            </div>

            {/* <span className="battery-percent">{percent}%</span> */}
            <div className="theme-button" onClick={themeMode}>
              <Icon iconName={theme === "light" ? "faSun" : "faMoon"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Staturbar;
