import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/brand/");
};

export default { getAll };
