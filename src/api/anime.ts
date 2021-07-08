import http, { APISuccess } from "utils/api";
import { formatSearchObject } from "utils/query";

export function getAnimeList(params?: string): Promise<APISuccess> {
  return http("GET", "/anime", null, formatSearchObject(params));
}

export function getTrendingAnimeList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/trending/anime", null, params);
}

export function getSingleAnime(id: string): Promise<APISuccess> {
  return http("GET", `/anime/${id}`);
}
