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

export function getSingleManga(id: string): Promise<APISuccess> {
  return http("GET", `/manga/${id}`);
}

export function getMangaChaptersList(
  additional: Record<string, string>,
  params?: string
): Promise<APISuccess> {
  return http(
    "GET",
    "/chapters",
    null,
    formatSearchObject(params, additional, true)
  );
}

export function getMangaChapter(id: Number): Promise<APISuccess> {
  return http("GET", `/chapters/${id}`);
}
