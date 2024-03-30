import { axiosAuth } from "../axios/axios";

export const getAgencyManager = (params?: object) => {
  return axiosAuth.get("/agency/list/users", { params });
};

export const getAgencyList = (params?: object) => {
  return axiosAuth.get("/agency/list/template-agency", { params });
};

export const updateCheckAgency = (params: { agencyId: number }) => {
  return axiosAuth.patch(
    `/agency/approve/template-agency?agencyId=${params.agencyId}`
  );
};

export const getAllListCompany = (keyword: string) => {
  return axiosAuth.get(`/agency/list/companies?keyword=${keyword}`);
};
