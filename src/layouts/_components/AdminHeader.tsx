/* eslint-disable @typescript-eslint/no-unused-vars */
import avatar from "@/assets/logos/job-matching-logo.svg";
import useAuth from "@/hooks/auth/useAuth";
import { RootState } from "@/redux/store";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Dropdown, MenuProps, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

import logo from "@/assets/logos/logo.svg";

export const routes = [
  // { path: "/", breadcrumb: "Home" },
  // { path: "/admin", breadcrumb: "Dashboard" },
  // { path: "/admin/cms", breadcrumb: "CMS" },
  // { path: "/admin/lms", breadcrumb: "LMS" },
  // { path: "/admin/users", breadcrumb: "User" },
  // { path: "/admin/user/student/:id", breadcrumb: "View" },
  // { path: "/admin/class-approval", breadcrumb: "Class Approval" },
  // { path: "/admin/campus", breadcrumb: "Campus" },
  // { path: "/campus/student", breadcrumb: "Student" },
  // { path: "/campus/student/:id", breadcrumb: "View" },
  // { path: "/campus/lms", breadcrumb: "LMS" },
  // { path: "/campus/approval-request", breadcrumb: "Approval Request" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AdminHeader = (props: any) => {
  const { roles } = props;

  // console.log(roles, "roles");

  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  // console.log(breadcrumbs, "breadcrumbs");
  const options = [
    {
      title: <>{roles[0].roleName === "ADMIN" ? "Admin" : "Agency"}</>,
    },
    {
      title: (
        <div className="text-white cursor-pointer">
          {breadcrumbs?.slice(2).map(({ breadcrumb }) => {
            return <div>{breadcrumb} </div>;
          })}
        </div>
      ),
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{ padding: 0, background: colorBgContainer }}
      className="!bg-[#083344] "
    >
      <div className="w-full h-full flex items-center justify-between p-6">
        <Breadcrumb
          className="text-xl font-semibold !text-white"
          items={options}
        />
        {/* <Breadcrumb className="text-xl font-semibold !text-white">
          {breadcrumbs?.slice(1).map(({ match, breadcrumb }) => (
            <Breadcrumb.Item key={match.pathname} className="!text-white">
              <Link to={match.pathname} className="!text-white">
                {breadcrumb}
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb> */}
        <UserAvatar />
      </div>
    </Header>
  );
};

const UserAvatar = () => {
  const currentUser = useSelector((state: RootState) => state.auth.infoUser);
  const { handleLogOut } = useAuth();

  const items: MenuProps["items"] = [
    {
      key: "2",
      label: (
        <button
          className="w-full flex gap-4 items-center"
          type="button"
          onClick={handleLogOut}
        >
          <span>Log out</span>
          <LogoutOutlined />
        </button>
      ),
    },
  ];
  return (
    <div className="flex items-center gap-4">
      <p className="text-white">
        Welcome,{" "}
        <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
      </p>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Avatar
          className="border border-white bg-white"
          src={
            avatar && (
              <img src={logo} alt="avatar" className="w-full object-cover" />
            )
          }
          icon={<UserOutlined />}
        />
      </Dropdown>
    </div>
  );
};
