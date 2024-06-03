import httpClient from "../http-common.ts";

const getAllNames = () => {
  return httpClient.get("/repair-list/get-all-names");
};

const getAll = () => {
  return httpClient.get("/repair-list/get-all");
};

const AddRepair = (data: any) => {
  return httpClient.post("/repair-list/save-repairs", data);
};

export default { getAllNames, getAll, AddRepair };
