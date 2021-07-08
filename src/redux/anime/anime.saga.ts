import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./anime.types";
import * as actions from "./anime.actions";

function* getSingleAnime(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const { data } = yield call(fetch);

    yield put(actions.successSingleAnime(data));
  } catch (e: Any) {
    yield put(actions.failureSingleAnime());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherSingleAnime(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.SINGLE_ANIME_CALL_REQUEST, getSingleAnime);
}

export default watcherSingleAnime;
