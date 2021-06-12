import { ACTION } from "configs/constants";
import * as types from "./anime.types";

export function requestAnime(): ACTION {
  return {
    type: types.ANIME_CALL_REQUEST,
  };
}

export function successAnime(data: Record<string, unknown>): ACTION {
  return {
    type: types.ANIME_CALL_SUCCESS,
    payload: data,
  };
}
