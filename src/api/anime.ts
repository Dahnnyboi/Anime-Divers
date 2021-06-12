import http, { APISuccess } from "utils/api";

export function getAnimeList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/anime", null, params);
}

export function getTrendingAnimeList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/trending/anime", null, params);
}
