import * as types from "./episodes.types";

export function requestListEpisodes(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.EPISODES_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successListEpisodes(
  data: Record<string, unknown> | unknown
): ACTION {
  return {
    type: types.EPISODES_CALL_SUCCESS,
    payload: data,
  };
}

export function failureListEpisodes(): ACTION {
  return {
    type: types.EPISODES_CALL_FAILURE,
  };
}
