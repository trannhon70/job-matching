import { axiosAuth } from "../axios/axios";

export const getJobList = (params?: object) => {
  return axiosAuth.get("/job/getJobByAdmin", { params });
};

export const getDetailJob = (slug?: string) => {
  return axiosAuth.get(`/job/getDetailByAdmin/${slug}`);
};
