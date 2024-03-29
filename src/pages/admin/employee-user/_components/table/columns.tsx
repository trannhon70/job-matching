import { EmployeeType } from "@/types/employee";
import { Divider, TableProps } from "antd";
import dayjs from "dayjs";
import ViewDetailUserButton from "./ViewDetailUserButton";

export const columns: TableProps<EmployeeType>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Email(ID)",
    key: "Email(ID)",
    dataIndex: "email",
  },
  {
    title: "Name",
    key: "Name",
    render: (_, record) => <>{`${record?.firstName} ${record?.lastName}`}</>,
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Address",
    key: "Address",
    render: (_, record) => (
      <>
        <span>{record?.country?.countryName}</span> <Divider type="vertical" />
        <span>{record?.streetName}</span>
      </>
    ),
  },
  {
    title: "Resume",
    key: "Resume",
    render: (_, record) => <ViewDetailUserButton userId={record?.id} />,
  },
  {
    title: "Date",
    key: "Date",
    dataIndex: "createdAt",
    render: (date) => <>{dayjs(date).format("DD-MM-YYYY")}</>,
  },
];
