import qs, { ParsedQs } from "qs";

export function searchToQuery(query: string): Any {
  return qs.parse(query.substring(1));
}

export function queryToSearch(search: ParsedQs): string {
  const searchString = qs.stringify(search);
  return "?".concat(searchString);
}

export function formatSearch(
  search: string | undefined
): Record<string, string> {
  const queryObject = searchToQuery(search || "");
  const format: Any = {};

  Object.keys(queryObject).forEach((key) => {
    format[`filter[${key}]`] = queryObject[key];
  });

  return format;
}
