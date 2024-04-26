import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/repair/");
};

const getTotalCost = (id: any) => {
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

// reports

const getCost = () => {
  return httpClient.get("report/cost/record");
};

const getAverage = () => {
  return httpClient.get("report/average");
};

const getType = () => {
  return httpClient.get("report/summary/type");
};
const getMotor = () => {
  return httpClient.get("report/summary/motor");
};

export default {
  getAll,
  getTotalCost,
  post,
  getTypeCost,
  getAllvr,
  update,
  getCost,
  getAverage,
  getType,
  getMotor,
};
