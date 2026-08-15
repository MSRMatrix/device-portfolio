import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";

import sun from "../assets/backgrounds/mohammad-alizade-sun.jpg"
import livingRoom from "../assets/backgrounds/ayanna-johnson-living-room.jpg"
import city from "../assets/backgrounds/eugene-kucheruk-city.jpg"
import snow from "../assets/backgrounds/nima-mot-snow.jpg"

import livingRoomSound from "../assets/sounds/living-room.mp3"
import rainySound from "../assets/sounds/rainy.mp3"
import sunsetSound from "../assets/sounds/sunset.mp3"
import windySound from "../assets/sounds/windy.mp3"

const DeviceLayout = () => {
  const [theme, setTheme] = useState("dark");
  const [intro, setIntro] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIntro(false);
  }, 12000);

  return () => clearTimeout(timer);
}, []);

const images = [
  {
    name: "sun",
    image: sun,
    style: "sunset",
    sound: sunsetSound,
  },
  {
    name: "livingRoom",
    image: livingRoom,
    style: "calm",
    sound: livingRoomSound,
  },
  {
    name: "city",
    image: city,
    style: "rainy",
    sound: rainySound,
  },
  {
    name: "snow",
    image: snow,
    style: "windy",
    sound: windySound,
  },
];

// Sound muss intigriert werden und auch buttons die entweder im großen hintergrund verfügbar sind oder nur in handy settings

const [background, setBackground] = useState(images[2])

console.log(background.image);


  return (
    <div s style={{
    height: "100%",
    backgroundImage: `url(${background.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} className={theme}>
      <div className="device-layout">
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
