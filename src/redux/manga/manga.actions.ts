import * as types from "./manga.types";

export function requestSingleManga(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.SINGLE_MANGA_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successSingleManga(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.SINGLE_MANGA_CALL_SUCCESS,
    payload: data,
  };
}

export function failureSingleManga(): ACTION {
  return {
    type: types.SINGLE_MANGA_CALL_FAILURE,
  };
}
