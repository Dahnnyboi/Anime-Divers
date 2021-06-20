import { combineReducers } from "redux";
import animeReducer from "./anime/anime.reducer";
import mangaReducer from "./manga/manga.reducer";

export default combineReducers({
  anime: animeReducer,
  manga: mangaReducer,
});
