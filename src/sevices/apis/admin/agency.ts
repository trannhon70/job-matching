import { axiosAuth } from "../axios/axios";

export const getAgencyManager = (params?: object) => {
  return axiosAuth.get("/agency/list/users", { params });
};

export const getAgencyList = (params?: object) => {
  return axiosAuth.get("/agency/list/template-agency", { params });
};
