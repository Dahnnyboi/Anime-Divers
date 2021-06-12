import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { getAnimeList } from "api/anime";

import * as types from "./anime.types";
import * as actions from "./anime.actions";

function* workerAnime(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  const data = yield call(getAnimeList);

  yield put(actions.successAnime(data));
}

export function* watcherAnime(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.ANIME_CALL_REQUEST, workerAnime);
}

export default watcherAnime;
