import moment from "moment";

export function labelDate(date: string, format = "LL"): string {
  return moment(date).format(format);
}
