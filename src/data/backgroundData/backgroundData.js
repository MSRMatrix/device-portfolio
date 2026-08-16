import sun from "@/assets/backgrounds/mohammad-alizade-sun.jpg";
import livingRoom from "@/assets/backgrounds/ayanna-johnson-living-room.jpg";
import city from "@/assets/backgrounds/eugene-kucheruk-city.jpg";
import snow from "@/assets/backgrounds/nima-mot-snow.jpg";

import livingRoomSound from "@/assets/sounds/living-room.mp3";
import rainySound from "@/assets/sounds/rainy.mp3";
import sunsetSound from "@/assets/sounds/sunset.mp3";
import windySound from "@/assets/sounds/windy.mp3";


export const backgroundData = [
    {
      name: "sun",
      image: sun,
      style: "sunset",
      sound: sunsetSound,
      credit: {
        author: "Mohammad Alizade",
        authorUrl:
          "https://unsplash.com/de/@mohamadaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "Unsplash",
        sourceUrl:
          "https://unsplash.com/de/fotos/sonnenaufgang-unter-freiem-himmel-fKjJYw1vOf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
    },
    {
      name: "livingRoom",
      image: livingRoom,
      style: "calm",
      sound: livingRoomSound,
      credit: {
        author: "Ayanna Johnson",
        authorUrl:
          "https://unsplash.com/de/@bigjumper429?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "Unsplash",
        sourceUrl:
          "https://unsplash.com/de/fotos/ein-laptop-auf-einem-tisch-Qa6ZVhy5VRQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
    },
    {
      name: "city",
      image: city,
      style: "rainy",
      sound: rainySound,
      credit: {
        author: "Eugene Kucheruk",
        authorUrl:
          "https://unsplash.com/de/@fruitboykid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "Unsplash",
        sourceUrl:
          "https://unsplash.com/de/fotos/eine-skyline-der-stadt-bei-nacht-IUeoOm3rp-E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
    },
    {
      name: "snow",
      image: snow,
      style: "windy",
      sound: windySound,
      credit: {
        author: "Nima Mot",
        authorUrl:
          "https://unsplash.com/de/@nimamot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source: "Unsplash",
        sourceUrl:
          "https://unsplash.com/de/fotos/ein-mann-fahrt-mit-einem-snowboard-einen-schneebedeckten-hang-hinunter-YFqsDvOu9Pg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
    },
  ];
