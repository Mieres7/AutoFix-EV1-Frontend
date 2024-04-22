import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/repair/s");
};

const getlTotalCost = (id: string) => {
  return httpClient.get(`/repair/${id}`);
};

const post = (data: any) => {
  return httpClient.post("/repair/", data);
};

const update = (data: any, id: any) => {
  return httpClient.put(`/repair/${id}`, data);
};

// repairTypeCost controllers
const getTypeCost = () => {
  return httpClient.get("/repair/type/");
};

// vehicle repair
const getAllvr = () => {
  return httpClient.get("/vehicleRepair/");
};

export default { getAll, getlTotalCost, post, getTypeCost, getAllvr, update };
