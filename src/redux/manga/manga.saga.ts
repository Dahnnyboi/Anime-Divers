import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./manga.types";
import * as actions from "./manga.actions";

function* getSingleManga(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const { data } = yield call(fetch);

    yield put(actions.successSingleManga(data));
  } catch (e: Any) {
    yield put(actions.failureSingleManga());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherSingleManga(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.SINGLE_MANGA_CALL_REQUEST, getSingleManga);
}

export default watcherSingleManga;
