import { all } from "redux-saga/effects";
import watcherAnime from "./animes/animes.saga";
import watcherManga from "./mangas/mangas.saga";
import watcherSingleAnime from "./anime/anime.saga";

export default function* rootSaga(): Any {
  yield all([watcherAnime(), watcherManga(), watcherSingleAnime()]);
}
