import qs, { ParsedQs } from "qs";

export function searchToQuery(query: string): Any {
  return qs.parse(query.substring(1));
}

export function queryToSearch(search: ParsedQs): string {
  const searchString = qs.stringify(search);
  return "?".concat(searchString);
}

export function formatSearchObject(
  search: string | undefined,
  additional?: Record<string, string>,
  sortByNumber?: boolean
): Record<string, string> {
  const queryObject = searchToQuery(search || "");
  const format: Any = {};

  if (additional) {
    Object.assign(queryObject, additional);
  }

  Object.keys(queryObject).forEach((key) => {
    if (key === "limit" || key === "offset") {
      format[`page[${key}]`] = queryObject[key];
    } else {
      format[`filter[${key}]`] = queryObject[key];
    }
  });

  if (sortByNumber) format.sort = "number";

  return format;
}

export function getQueryStringFromURL(URL: string): string | undefined {
  if (URL) {
    const decodedURL = decodeURIComponent(URL);
    const withQuery = decodedURL.toString().split("?")[1];

    return "?".concat(withQuery);
  }
  return undefined;
}

export function convertObjectQueryString(
  links: Record<string, string>
): Record<string, string> {
  const formatted: Any = {};
  Object.keys(links).forEach((item) => {
    formatted[item] = getQueryStringFromURL(links[item]);
  });

  return formatted;
}

export function getParameterByName(
  name: string,
  url = window.location.href
): string | null {
  const queryName = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]".concat(queryName, "(=([^&#]*)|&|#|$)"));
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
