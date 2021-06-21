import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { ACTION_FETCH } from "configs/constants";

import * as types from "./anime.types";
import * as actions from "./anime.actions";

function* getAnime(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;
  try {
    const data = yield call(fetch);

    yield put(actions.successAnime(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    yield put(actions.failureAnime());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherAnime(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.ANIME_CALL_REQUEST, getAnime);
}

export default watcherAnime;
