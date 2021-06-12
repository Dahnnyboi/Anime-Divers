import { all } from "redux-saga/effects";
import watcherAnime from "./anime/anime.saga";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  yield all([watcherAnime()]);
}
