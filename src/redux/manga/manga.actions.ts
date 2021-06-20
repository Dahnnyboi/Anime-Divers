import { ACTION } from "configs/constants";
import * as types from "./manga.types";

export function requestManga(): ACTION {
  return {
    type: types.MANGA_CALL_REQUEST,
  };
}

export function successManga(data: Record<string, unknown>): ACTION {
  return {
    type: types.MANGA_CALL_SUCCESS,
    payload: data,
  };
}
