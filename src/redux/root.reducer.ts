import { combineReducers } from "redux";
import animeReducer from "./animes/animes.reducer";
import mangaReducer from "./mangas/mangas.reducer";
import singleAnimeReducer from "./anime/anime.reducer";

export default combineReducers({
  animes: animeReducer,
  mangas: mangaReducer,
  anime: singleAnimeReducer,
});
