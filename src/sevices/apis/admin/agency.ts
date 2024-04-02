import { LoginField } from "@/types/auth";
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

export const getAllListCompany = (keyword: string, userId: string) => {
  return axiosAuth.get(
    `/agency/list/companies?keyword=${keyword}&userId=${userId}`
  );
};

export const createCompanytoAgency = (
  userId: string,
  body: { companiesIds: string[] }
) => {
  return axiosAuth.post(`/agency/assign/companies?userId=${userId}`, body);
};

export const LoginPostAgency = (body:LoginField) => {
  return axiosAuth.post(`/auth/loginAgency`, body);
}