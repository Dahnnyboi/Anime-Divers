import { ACTION, ACTION_FETCH } from "configs/constants";
import * as types from "./manga.types";

export function requestManga(
  fetchFunction: Function,
  callbackFunction: Function
): ACTION_FETCH {
  return {
    type: types.MANGA_CALL_REQUEST,
    fetch: fetchFunction,
    callback: callbackFunction,
  };
}

export function successManga(data: Record<string, unknown>): ACTION {
  return {
    type: types.MANGA_CALL_SUCCESS,
    payload: data,
  };
}
export function failureMangas(): ACTION {
  return {
    type: types.MANGA_CALL_FAILURE,
  };
}
