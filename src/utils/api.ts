import axios from "axios";
import { API_URL } from "configs/environment-keys";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data.errors[0]);
  }
);

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

export interface APISuccess {
  data: Array<Record<string, unknown>>;
  links: { first?: string; prev?: string; next?: string; last?: string };
  meta: {
    count: number;
  };
}

async function http(
  method: HTTPMethods,
  url: string,
  data?: Record<string, unknown> | null,
  params?: Record<string, unknown> | null
): Promise<APISuccess> {
  if (method === "GET" && data) {
    throw new Error("Cannot use get with body");
  }

  const datas = await api({
    method,
    url,
    data,
    params,
  });

  const apiData: APISuccess = {
    data: datas.data.data,
    links: datas.data.links,
    meta: datas.data.meta,
  };

  return apiData;
}

export default http;
