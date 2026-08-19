import { Outlet } from "react-router-dom";

import Navigation from "@/components/navigation/Navigation";
import Device from "@/components/device/Device";
import { useContext, useEffect, useState } from "react";
import Intro from "@/components/Intro";

import { BackgroundSettings } from "../context/BackgroundSettings";
import { useRef } from "react";

const DeviceLayout = () => {
  const [theme, setTheme] = useState("dark");
  const [intro, setIntro] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIntro(false);
  }, 4000);

  return () => clearTimeout(timer);
}, []);

// Sound muss intigriert werden und auch buttons die entweder im großen hintergrund verfügbar sind oder nur in handy settings
// Macher der Bilder müssen in Settings aufgeführt werden und auch die Seite für die Sounds

const {background} = useContext(BackgroundSettings);
const audioRef = useRef(null);

useEffect(() => {
  if (!background?.sound) {
    return
  };

  const audio = audioRef.current;

  audio.src = background.sound;
  audio.loop = true;
  audio.volume = 0.2;

  audio.play().catch(() => {});

  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, [background]);

  return (
    <div s style={{
    height: "100%",
    backgroundImage: `url(${background.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} className={theme}>
      <div className="device-layout">
        <audio ref={audioRef} />
        <Device theme={theme} setTheme={setTheme} intro={intro}>
          {intro ? (
            <Intro />
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
