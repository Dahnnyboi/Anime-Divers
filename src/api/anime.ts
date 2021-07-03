import http, { APISuccess } from "utils/api";
import { formatSearch } from "utils/query";

export function getAnimeList(params?: string): Promise<APISuccess> {
  return http("GET", "/anime", null, formatSearch(params));
}

export function getTrendingAnimeList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/trending/anime", null, params);
}
