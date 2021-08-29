import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./chapters.types";
import * as actions from "./chapters.actions";

function* getListChapters(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const response = yield call(fetch);

    yield put(actions.successListChapters(response));
  } catch (e: Any) {
    yield put(actions.failureListChapters());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherListEpisodes(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.CHAPTERS_CALL_REQUEST, getListChapters);
}

export default watcherListEpisodes;
