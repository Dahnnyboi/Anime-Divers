import { all } from "redux-saga/effects";
import watcherAnime from "./anime/anime.saga";
import watcherManga from "./manga/manga.saga";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  yield all([watcherAnime(), watcherManga()]);
}
