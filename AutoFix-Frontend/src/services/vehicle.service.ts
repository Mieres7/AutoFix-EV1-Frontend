import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/vehicle/");
};

const post = (data: any) => {
  return httpClient.post("/vehicle/", data);
};

const deleteVehicle = (id: any) => {
  return httpClient.delete(`/vehicle/${id}`);
};

export default { getAll, post, deleteVehicle };
