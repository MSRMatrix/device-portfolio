import { hobbiesArray } from "@/data/hobbies";
import Icon from "@/components/Icon";

import guitarData from "@/data/guitar";
import writingData from "@/data/writing";
import sportData from "@/data/sport";
import codingData from "@/data/coding";
import dartsData from "@/data/darts";
import YoutubePlayer from "@/components/YoutubePlayer";

import { useState } from "react";

const Hobbies = () => {
  const [activeSong, setActiveSong] = useState(null);

  const hobbyContent = {
    guitar: guitarData,
    writing: writingData,
    sport: sportData,
    coding: codingData,
    darts: dartsData,
  };

  return (
    <section className="hobbies">
      {hobbiesArray.map((hobby) => {
        const data = hobbyContent[hobby.key];

        return (
          <article key={hobby.id} className="hobby-page">
            <div className="hobby-header">
              <Icon iconName={hobby.icon} />

              <h1>{hobby.name}</h1>
            </div>

            <p>{hobby.description}</p>

            {data?.songs && (
              <div className="songs">
                {data.songs.map((song) => (
                  <div onClick={() => setActiveSong(song)}
                    key={song.id}
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
