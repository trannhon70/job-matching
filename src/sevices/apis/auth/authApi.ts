/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginField } from "@/types/auth";
import { axiosAuth, axiosClient } from "../axios/axios";

export const loginApi = (body: LoginField) => {
  return axiosClient.post("/auth/login", body);
};

export const getCurrentUser = () => {
  return axiosAuth.get("/auth/current-user");
};

export const resetPassword = (body: { pass: string }) => {
  return axiosAuth.put(`/user/changePassAdmin`, body);
};

export const sendCodeEmail = (body: { email: string }) => {
  return axiosClient.post("/auth/send-code", body);
};

export const register = (body: {
  email: string;
  code: number;
  password: string;
}) => {
  return axiosClient.post("/auth/registerAgency", body);
};

export const getAllCountry = () => {
  return axiosAuth.get("/country/filterCountry");
};

export const createTemplateAgency = (body : any) => {
  return axiosAuth.post("agency/create/template-agency",body);
};