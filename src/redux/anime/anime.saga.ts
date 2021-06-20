import { fork, take, call, put, StrictEffect } from "redux-saga/effects";
import { getTrendingAnimeList } from "api/anime";

import * as types from "./anime.types";
import * as actions from "./anime.actions";

function* getAnime(): Generator<StrictEffect, void, Record<string, unknown>> {
  const data = yield call(getTrendingAnimeList);

  yield put(actions.successAnime(data));
}

export function* watcherAnime(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  while (true) {
    yield take(types.ANIME_CALL_REQUEST);
    yield fork(getAnime);
  }
}

export default watcherAnime;
