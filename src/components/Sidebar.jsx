import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <div className="fixed top-50 left-0 h-screen w-60 flex flex-col bg-purple-900 ">
      <aside className="">
        <nav>
          <h3 className="text-2xl">Top Anime</h3>
          {topAnime.map((anime) => (
            <a
              href={anime.url}
              key={anime.mal_id}
              target="_blank"
              rel="noreferrer"
              className=""
            >
              {anime.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
