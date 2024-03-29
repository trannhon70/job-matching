import { axiosAuth } from "../axios/axios";

export const getInterviewList = (params?: object) => {
  return axiosAuth.get("/job/getInterviewByAdmin", { params });
};
