import { Navigate, Outlet } from "react-router-dom";

import logo from "@/assets/logos/job-matching-logo.svg";
import { RootState } from "@/redux/store";
import { Layout, theme } from "antd";
import { useSelector } from "react-redux";
import { AdminHeader, AdminMenu } from "./_components";

const { Sider, Content } = Layout;

const AdminLayout = () => {
  const authenticated = useSelector((state: RootState) => state.auth);
  if (!authenticated.isAuthenticated) return <Navigate to="/login" />;

  console.log(authenticated, "authenticated");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <Sider theme="light" trigger={null}>
        <div className="w-[90%] py-4 mx-auto h-16 flex items-center">
          <img src={logo} alt="logo" className="w-full object-cover" />
        </div>
        <AdminMenu roles={authenticated.infoUser?.roles} />
      </Sider>
      <Layout>
        <AdminHeader />
        <Content
          style={{
            margin: "16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="overflow-y-auto"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
