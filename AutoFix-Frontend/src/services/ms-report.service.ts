import httpClient from "../http-common.ts";

const getAllReport = (month: string, year: string) => {
  return httpClient.get(`/report/get-all/${month}/${year}`);
};

const getAllComparison = (month: string, year: string) => {
  return httpClient.get(`/report/get-comparison/${month}/${year}`);
};

export default { getAllComparison, getAllReport };
