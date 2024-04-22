import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/vehicle/");
};

const post = (data: any) => {
  return httpClient.post("/vehicle/", data);
};

export default { getAll, post };
