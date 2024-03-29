import { axiosAuth } from "../axios/axios";

export const getAllCountry = (params?: object) => {
  return axiosAuth.get("/country/filterCountry", { params });
};
