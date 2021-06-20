import React from "react";

import LandingShowcase from "./LandingShowcase";
import LandingTrendingAnime from "./LandingTrendingAnime";
import LandingTrendingManga from "./LandingTrendingManga";
import useGetTrending from "./useGetTrending";

function Index(): JSX.Element {
  const { animes, loadingAnime, mangas, loadingManga } = useGetTrending();

  return (
    <div>
      <LandingShowcase />
      <LandingTrendingAnime data={animes} loading={loadingAnime} />
      <LandingTrendingManga data={mangas} loading={loadingManga} />
    </div>
  );
}

export default Index;
