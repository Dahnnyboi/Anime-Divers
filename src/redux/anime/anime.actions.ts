import * as types from "./anime.types";

export function requestAnime(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.ANIME_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successAnime(data: Record<string, unknown>): ACTION {
  return {
    type: types.ANIME_CALL_SUCCESS,
    payload: data,
  };
}

export function failureAnime(): ACTION {
  return {
    type: types.ANIME_CALL_FAILURE,
  };
}
