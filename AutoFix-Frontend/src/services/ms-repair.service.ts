import httpClient from "../http-common.ts";

const saveRepair = (data: any) => {
  return httpClient.post("/repair/register", data);
};

const getAll = () => {
  return httpClient.get("/repair/get-all");
};

const getTotalCost = (repairId: any) => {
  return httpClient.get(`/repair/get-total-cost/${repairId}`);
};

const checkOutWorkshop = (repairId: any) => {
  return httpClient.put(`/repair/checkout-workshop/${repairId}`);
};
export default { saveRepair, getAll, getTotalCost, checkOutWorkshop };
