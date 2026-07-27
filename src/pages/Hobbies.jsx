import { hobbiesArray } from "@/data/hobbies";
import Icon from "@/components/Icon";

import guitarData from "@/data/guitar";
import writingData from "@/data/writing";
import sportData from "@/data/sport";
import codingData from "@/data/coding";
import dartsData from "@/data/darts";
import YoutubePlayer from "@/components/YoutubePlayer";

const Hobbies = () => {
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
            <Icon iconName={hobby.icon} />

            <h1>{hobby.name}</h1>

            <p>{hobby.description}</p>

            {data.songs && (
              <div>
                {data.songs.map((song) => (
                  <div key={song.id}>
                    <h2>{song.title}</h2>
                    <p>{song.artist}</p>
                    <YoutubePlayer videoId={song.youtube}/>
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
