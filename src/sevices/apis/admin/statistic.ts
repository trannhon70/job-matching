import { axiosAuth } from "../axios/axios";

export const getStatistic = (params?: object) => {
  return axiosAuth.get("/job/apply/staticticalAll", { params });
};

export const getStatisticDashboard = (params: {
  startDate: string;
  endDate: string;
}) => {
  let URL = `/statistics/dashboard`;
  if (params.startDate !== "" && params.endDate !== "") {
    URL += `?startDate=${params.startDate}&endDate=${params.endDate}`;
  }
  return axiosAuth.get(URL);
};
