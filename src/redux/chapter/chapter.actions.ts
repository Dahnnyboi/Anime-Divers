import * as types from "./chapter.types";

export function requestSingleChapter(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.CHAPTER_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successSingleChapter(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.CHAPTER_CALL_SUCCESS,
    payload: data,
  };
}

export function failureSingleChapter(): ACTION {
  return {
    type: types.CHAPTER_CALL_FAILURE,
  };
}
