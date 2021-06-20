import { fork, take, call, put, StrictEffect } from "redux-saga/effects";
import { getTrendingMangaList } from "api/manga";

import * as types from "./manga.types";
import * as actions from "./manga.actions";

function* getManga(): Generator<StrictEffect, void, Record<string, unknown>> {
  const data = yield call(getTrendingMangaList);

  yield put(actions.successManga(data));
}

export function* watcherManga(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  while (true) {
    yield take(types.MANGA_CALL_REQUEST);
    yield fork(getManga);
  }
}

export default watcherManga;
