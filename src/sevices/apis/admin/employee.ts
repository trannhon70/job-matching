import { axiosAuth } from "../axios/axios";

export const getEmployeeList = (params?: object) => {
  return axiosAuth.get("/user/getListUserByAdmin", { params });
};

export const getDetailEmployee = (id?: string) => {
  return axiosAuth.get(`/user/getAllInfo/${id}`);
};
