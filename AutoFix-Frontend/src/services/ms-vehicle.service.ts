import httpClient from "../http-common.ts";

// Vehicle controller

const getAllVehicles = () => {
  return httpClient.get("/vehicle/get-all");
};

const saveVehicle = (data: any) => {
  return httpClient.post("/vehicle/save", data);
};

// Brand controller

const getAllBrands = () => {
  return httpClient.get("/brand/get-all");
};

export default { getAllBrands, getAllVehicles, saveVehicle };
