/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { routes } from ".";

export const AdminMenu = (props: any) => {
  const {roles} = props
  const navigate = useNavigate();
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  const defaultKey =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (breadcrumbs[breadcrumbs.length - 1].breadcrumb as any)?.props?.children ??
    "";
  const defaultOpenKey =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (breadcrumbs[breadcrumbs.length - 2].breadcrumb as any)?.props?.children ??
    "";

    const isAdmin = roles[0].roleName === 'ADMIN';
    console.log(isAdmin, 'roles');
    const menuItems = [
      {
        key: "Dashboard",
        label: "Dashboard",
        onClick: () => navigate("/admin/dashboard"),
      },
      isAdmin && {
        key: "Agency",
        label: "Agency ",
        children: [
          {
            key: "Agency",
            label: "Agency",
            onClick: () => navigate("/admin/agency"),
          },
          {
            key: "Agency manager",
            label: "Agency manager",
            onClick: () => navigate("/admin/agency-manager"),
          },
          // {
          //   key: "Agency Company",
          //   label: "Agency Company",
          //   onClick: () => navigate("/admin/agency-company"),
          // },
        ],
      },
      {
        key: "Member",
        label: "Member",
        children: [
          {
            key: "Employee User",
            label: "Employee User",
            onClick: () => navigate("/admin/employee-user"),
          },
          {
            key: "Corporate User",
            label: "Corporate User",
            onClick: () => navigate("/admin/corporate-user"),
          },
        ],
      },
      {
        key: "Company",
        label: "Company",
        onClick: () => navigate("/admin/company"),
      },
      {
        key: "Job",
        label: "Job",
        onClick: () => navigate("/admin/job"),
      },
      {
        key: "Interview",
        label: "Interview",
        onClick: () => navigate("/admin/interview"),
      },
      {
        key: "Employment",
        label: "Employment",
        onClick: () => navigate("/admin/employment"),
      },
      {
        key: "Setting",
        label: "Setting",
        onClick: () => navigate("/admin/setting"),
      },
    ];
    
    const filteredMenuItems : any = menuItems.filter(item => !!item);

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[`${defaultKey}`]}
      defaultOpenKeys={[`${defaultOpenKey}`]}
      items={filteredMenuItems
      //   [
      //   {
      //     key: "Dashboard",
      //     label: "Dashboard",
      //     onClick: () => navigate("/admin/dashboard"),
      //   },
      //   {
      //     key: "Agency",
      //     label: "Agency ",
      //     children: [
      //       {
      //         key: "Agency",
      //         label: "Agency",
      //         onClick: () => navigate("/admin/agency"),
      //       },
      //       {
      //         key: "Agency manager",
      //         label: "Agency manager",
      //         onClick: () => navigate("/admin/agency-manager"),
      //       },
      //       // {
      //       //   key: "Agency Company",
      //       //   label: "Agency Company",
      //       //   onClick: () => navigate("/admin/agency-company"),
      //       // },
      //     ],
      //   },
      //   {
      //     key: "Member",
      //     label: "Member",
      //     children: [
      //       {
      //         key: "Employee User",
      //         label: "Employee User",
      //         onClick: () => navigate("/admin/employee-user"),
      //       },
      //       {
      //         key: "Corporate User",
      //         label: "Corporate User",
      //         onClick: () => navigate("/admin/corporate-user"),
      //       },
      //     ],
      //   },
      //   {
      //     key: "Company",
      //     label: "Company",
      //     onClick: () => navigate("/admin/company"),
      //   },

      //   {
      //     key: "Job",
      //     label: "Job",
      //     onClick: () => navigate("/admin/job"),
      //   },
      //   {
      //     key: "Interview",
      //     label: "Interview",
      //     onClick: () => navigate("/admin/interview"),
      //   },
      //   {
      //     key: "Employment",
      //     label: "Employment",
      //     onClick: () => navigate("/admin/employment"),
      //   },
      //   {
      //     key: "Setting",
      //     label: "Setting",
      //     onClick: () => navigate("/admin/setting"),
      //   },
      // ]
    }
    />
  );
};
