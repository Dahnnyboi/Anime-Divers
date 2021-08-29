import { combineReducers } from "redux";
import animeReducer from "./animes/animes.reducer";
import mangaReducer from "./mangas/mangas.reducer";
import singleAnimeReducer from "./anime/anime.reducer";
import episodesReducer from "./episodes/episodes.reducer";
import episodeReducer from "./episode/episode.reducer";
import singleMangaReducer from "./manga/manga.reducer";
import chaptersReducer from "./chapters/chapters.reducer";
import chapterReducer from "./chapter/chapter.reducer";

export default combineReducers({
  animes: animeReducer,
  mangas: mangaReducer,
  anime: singleAnimeReducer,
  manga: singleMangaReducer,
  episodes: episodesReducer,
  episode: episodeReducer,
  chapters: chaptersReducer,
  chapter: chapterReducer,
});
