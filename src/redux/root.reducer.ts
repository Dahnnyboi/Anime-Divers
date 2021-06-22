import { combineReducers } from "redux";
import animeReducer from "./animes/animes.reducer";
import mangaReducer from "./mangas/mangas.reducer";

export default combineReducers({
  animes: animeReducer,
  mangas: mangaReducer,
});
