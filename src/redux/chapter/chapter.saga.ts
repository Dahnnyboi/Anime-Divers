import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";

import * as types from "./chapter.types";
import * as actions from "./chapter.actions";

function* getSingleChapter(
  action: ACTION_FETCH
): Generator<StrictEffect, void, Record<string, unknown>> {
  const { fetch, callback } = action;

  try {
    const response = yield call(fetch);

    yield put(actions.successSingleChapter(response));
  } catch (e: Any) {
    yield put(actions.failureSingleChapter());
    yield call(callback, { title: e.status, text: e.detail });
  }
}

export function* watcherSingleChapter(): Generator<
  StrictEffect,
  void,
  Record<string, unknown>
> {
  yield takeLatest(types.CHAPTER_CALL_REQUEST, getSingleChapter);
}

export default watcherSingleChapter;
