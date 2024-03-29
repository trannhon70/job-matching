import { axiosAuth } from "../axios/axios";

export const getCompanyList = (params?: object) => {
  return axiosAuth.get("/company/getCompanyByAdmin", { params });
};

export const getDetailCompany = (slug?: string) => {
  return axiosAuth.get(`/company/getDetail/${slug}`);
};

export const updateActiveStatus = (body: { status: string; id: number[] }) => {
  return axiosAuth.put(`/activate/update`, body);
};
