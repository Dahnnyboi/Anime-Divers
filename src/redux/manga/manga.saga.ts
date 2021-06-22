import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";

import * as types from "./manga.types";
import * as actions from "./manga.actions";

function* getManga(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;
  try {
    const data = yield call(fetch);

    yield put(actions.successManga(data));
  } catch (e: Any) {
    yield put(actions.failureMangas());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherManga(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.MANGA_CALL_REQUEST, getManga);
}

export default watcherManga;
