import * as types from "./anime.types";

export function requestSingleAnime(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.SINGLE_ANIME_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successSingleAnime(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.SINGLE_ANIME_CALL_SUCCESS,
    payload: data,
  };
}

export function failureSingleAnime(): ACTION {
  return {
    type: types.SINGLE_ANIME_CALL_FAILURE,
  };
}
