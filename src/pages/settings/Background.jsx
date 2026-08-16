import sun from "@/assets/backgrounds/mohammad-alizade-sun.jpg";
import livingRoom from "@/assets/backgrounds/ayanna-johnson-living-room.jpg";
import city from "@/assets/backgrounds/eugene-kucheruk-city.jpg";
import snow from "@/assets/backgrounds/nima-mot-snow.jpg";

import livingRoomSound from "@/assets/sounds/living-room.mp3";
import rainySound from "@/assets/sounds/rainy.mp3";
import sunsetSound from "@/assets/sounds/sunset.mp3";
import windySound from "@/assets/sounds/windy.mp3";
import { useContext } from "react";
import { BackgroundSettings } from "../../context/BackgroundSettings";

const Background = () => {
  const { background, setBackground } = useContext(BackgroundSettings);

  const backgrounds = [
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

const changeBackground = (item) => {
  const image = new Image();

  image.src = item.image;
// Opacity oder ähnliches soll dann das neuste Bild ersetzen
  image.onload = () => {
    setBackground(item);
  };
};

  return (
    <>
     {backgrounds.map((item) => (
  <button
    key={item.name}
    disabled={item.name === background.name}
    onClick={() => changeBackground(item)}
  >
    {item.name}
  </button>
))}
    </>
  );
};

export default Background;
