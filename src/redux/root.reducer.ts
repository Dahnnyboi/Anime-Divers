import { combineReducers } from "redux";
import animeReducer from "./animes/animes.reducer";
import mangaReducer from "./mangas/mangas.reducer";
import singleAnimeReducer from "./anime/anime.reducer";
import episodesReducer from "./episodes/episodes.reducer";

export default combineReducers({
  animes: animeReducer,
  mangas: mangaReducer,
  anime: singleAnimeReducer,
  episodes: episodesReducer,
});
