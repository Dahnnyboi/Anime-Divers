import { all } from "redux-saga/effects";
import watcherAnime from "./anime/anime.saga";
import watcherManga from "./manga/manga.saga";

export default function* rootSaga(): Any {
  yield all([watcherAnime(), watcherManga()]);
}
