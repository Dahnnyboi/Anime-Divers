import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./episode.types";
import * as actions from "./episode.actions";

function* getSingleEpisode(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const response = yield call(fetch);

    yield put(actions.succcessSingleEpisode(response));
  } catch (e: Any) {
    yield put(actions.failureSingleEpisodes());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherSingleEpisode(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.EPISODE_CALL_REQUEST, getSingleEpisode);
}

export default watcherSingleEpisode;
