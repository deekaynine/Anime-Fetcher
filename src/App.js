import { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "./styles.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const url = `https://api.jikan.moe/v4/top/anime`;

    const result = await axios.get(url);

    setTopAnime(result.data.data.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const url = `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`;

    const result = await axios.get(url);

    setAnimeList(result.data.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div>
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
