import http, { APISuccess } from "utils/api";
import { formatSearchObject } from "utils/query";

export function getMangaList(params?: string): Promise<APISuccess> {
  return http("GET", "/manga", null, formatSearchObject(params));
}

export function getTrendingMangaList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/trending/manga", null, params);
}
