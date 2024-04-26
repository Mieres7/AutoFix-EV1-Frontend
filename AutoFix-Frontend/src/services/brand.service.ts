import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/brand/");
};

const updateBrand = (brand: any) => {
  return httpClient.put("/brand/", brand);
};

export default { getAll, updateBrand };
