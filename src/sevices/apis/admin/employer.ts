import { axiosAuth } from "../axios/axios";

export const getEmployerList = (params?: object) => {
  return axiosAuth.get("/employer/getEmployerByAdmin", { params });
};
