import { hobbiesArray } from "@/data/hobbies";
import Icon from "@/components/Icon";

import guitarData from "@/data/guitar";
import writingData from "@/data/writing";
import sportData from "@/data/sport";
import codingData from "@/data/coding";
import dartsData from "@/data/darts";
import YoutubePlayer from "@/components/YoutubePlayer";

import { useEffect, useRef, useState } from "react";

const Hobbies = () => {
  const [activeSong, setActiveSong] = useState(null);

  const [isSmallScreen, setIsSmallScreen] = useState(
  window.innerWidth <= 600
);

useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  const hobbyContent = {
    guitar: guitarData,
    writing: writingData,
    sport: sportData,
    coding: codingData,
    darts: dartsData,
  };

  const [activeHobby, setActiveHobby] = useState(1);
  const hobbyRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHobby(Number(entry.target.dataset.hobbyId));
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    hobbyRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  
  

  return (
    <section className="hobbies">
      <div className="hobby-indicator">
        {hobbiesArray.map((hobby) => (
          <span
            key={hobby.id}
            className={activeHobby === hobby.id ? "active" : ""}
            onClick={() => {
              document
                .querySelector(`[data-hobby-id="${hobby.id}"]`)
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          />
        ))}
      </div>

      {hobbiesArray.map((hobby, index) => {
        const data = hobbyContent[hobby.key];

        return (
          <article
            key={hobby.id}
            data-hobby-id={hobby.id}
            className="hobby-page"
            ref={(element) => {
              hobbyRefs.current[index] = element;
            }}
          >
            <div className="hobby-header">
              <Icon iconName={hobby.icon} />

              <h1>{hobby.name}</h1>
            </div>

          <div className="hobby-description">
  {hobby.description.map((item, index) => (
    <p key={index}>
      {isSmallScreen ? item.short : item.long}
    </p>
  ))}
</div>
            {data?.songs && (
              <div className="songs">
                {data.songs.map((song) => (
                  <div
                    key={song.id}
                    onClick={() => setActiveSong(song)}
                    className={`song ${
                      activeSong?.id === song.id ? "active" : ""
                    }`}
                  >
                    <h2>{song.title}</h2>

                    <p>{song.artist}</p>

                    {activeSong?.id === song.id && (
                      <YoutubePlayer song={song} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};

export default Hobbies;
