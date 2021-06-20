import http, { APISuccess } from "utils/api";

export function getTrendingMangaList(
  params?: Record<string, unknown>
): Promise<APISuccess> {
  return http("GET", "/trending/manga", null, params);
}
