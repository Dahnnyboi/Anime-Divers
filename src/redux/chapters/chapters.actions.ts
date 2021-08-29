import * as types from "./chapters.types";

export function requestListChapters(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.CHAPTERS_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successListChapters(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.CHAPTERS_CALL_SUCCESS,
    payload: data,
  };
}

export function failureListChapters(): ACTION {
  return {
    type: types.CHAPTERS_CALL_FAILURE,
  };
}
