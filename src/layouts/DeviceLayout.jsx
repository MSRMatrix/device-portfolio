import { Outlet } from "react-router-dom";

import Navigation from "@/components/navigation/Navigation";
import Device from "@/components/device/Device";
import { useContext, useEffect, useState } from "react";
import Intro from "@/components/Intro";

import { BackgroundSettings } from "../context/BackgroundSettings";
import { useRef } from "react";
import { AudioContext } from "../context/AudioContext";
import { DeviceColorContext } from "../context/DeviceColorContext";

const DeviceLayout = () => {
  const [theme, setTheme] = useState("dark");
  const [intro, setIntro] = useState(true);

  const { background } = useContext(BackgroundSettings);
  const { audioContext, setAudioContext } = useContext(AudioContext);
  const {deviceColorContext} = useContext(DeviceColorContext);
  const audioRef = useRef(null);

  useEffect(() => {
  if (!background?.sound || !audioRef.current) {
    return;
  }

  const audio = audioRef.current;

  audio.src = background.sound;
  audio.loop = audioContext.loop;
  audio.volume = audioContext.muted
    ? 0
    : audioContext.volume;

  audio.play().catch(() => {});

  setAudioContext((prev) => ({
    ...prev,
    sound: background.sound,
    playing: true,
  }));

  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, [background]);

  useEffect(() => {
  if (!audioRef.current) {
    return;
  }

  const audio = audioRef.current;

  audio.volume = audioContext.muted
    ? 0
    : audioContext.volume;

  audio.loop = audioContext.loop;
}, [
  audioContext.volume,
  audioContext.muted,
  audioContext.loop,
]);

  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={!deviceColorContext.device || !deviceColorContext.frame ? theme: ""}
    >
      <div className="device-layout">
        <audio ref={audioRef} />
        <Device theme={theme} setTheme={setTheme} intro={intro}>
          {intro ? (
            <Intro intro={intro} setIntro={setIntro} />
          ) : (
            <div className="app-content">
              <Outlet />
              <Navigation />
            </div>
          )}
        </Device>
      </div>
    </div>
  );
};

export default DeviceLayout;
