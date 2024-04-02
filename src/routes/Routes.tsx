import AdminLayout from "@/layouts/AdminLayout";
import {
  Agency,
  AgencyManager,
  CompanyPage,
  CorporateUserPage,
  DashboardPage,
  DetailCompanyPage,
  DetailEmployeeUserPage,
  DetailJobPage,
  EmployeeUserPage,
  EmploymentPage,
  InterviewPage,
  JobPage,
  SettingPage,
} from "@/pages/admin";
import AgencyCompany from "@/pages/admin/AgencyCompany";
import { MasterApprovalRequestForm } from "@/pages/auth/MasterApprovalRequest";
import LoginPage from "@/pages/auth/login/LoginPage";
import LoginAgency from "@/pages/auth/loginAgency";
import Register from "@/pages/auth/register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-agency" element={<LoginAgency />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/template-agency/:id"
          element={<MasterApprovalRequestForm />}
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="corporate-user" element={<CorporateUserPage />} />
          <Route path="employee-user" element={<EmployeeUserPage />} />
          <Route
            path="employee-user/:id"
            element={<DetailEmployeeUserPage />}
          />
          <Route path="company" element={<CompanyPage />} />
          <Route path="company/:id" element={<DetailCompanyPage />} />
          <Route path="job" element={<JobPage />} />
          <Route path="job/:id" element={<DetailJobPage />} />
          <Route path="employment" element={<EmploymentPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="agency" element={<Agency />} />
          <Route path="agency-manager" element={<AgencyManager />} />
          <Route path="agency-company" element={<AgencyCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
