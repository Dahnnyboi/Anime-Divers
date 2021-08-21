import * as types from "./episode.types";

export function requestSingleEpisode(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.EPISODE_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function succcessSingleEpisode(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.EPISODE_CALL_SUCCESS,
    payload: data,
  };
}

export function failureSingleEpisodes(): ACTION {
  return {
    type: types.EPISODE_CALL_FAILURE,
  };
}
