import { ConfirmBody } from "@/types/employment";
import { axiosAuth } from "../axios/axios";

export const getEmployment = (params?: object) => {
  return axiosAuth.get("/job/getJobManageByAdmin", { params });
};

export const updateJobStep = (jobId: number, body: ConfirmBody) => {
  return axiosAuth.patch(`/job/updateJobManageByAdmin/${jobId}`, body);
};
