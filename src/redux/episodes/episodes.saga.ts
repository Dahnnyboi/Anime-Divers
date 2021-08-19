import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./episodes.types";
import * as actions from "./episodes.actions";

function* getListEpisodes(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const response = yield call(fetch);

    yield put(actions.successListEpisodes(response));
  } catch (e: Any) {
    yield put(actions.failureListEpisodes());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherListEpisodes(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.EPISODES_CALL_REQUEST, getListEpisodes);
}

export default watcherListEpisodes;
