"use client";

// import { EmployerType } from "@/types/employer";
import { TableProps } from "antd";
import dayjs from "dayjs";
import { MdAssignmentAdd } from "react-icons/md";
import ModalAssign from "./modalAssign";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: TableProps<any>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Email(ID)",
    key: "Email(ID)",
    dataIndex: "user",
    render(value) {
      return <div>{value.email}</div>;
    },
  },
  {
    title: "Name",
    key: "firstName",
    dataIndex: "agency",
    render(value) {
      return <div>{value?.agencyName}</div>;
    },
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "agency",
    render(value) {
      return <div>{value?.phone}</div>;
    },
  },
  {
    title: "Agency",
    key: "Company",
    dataIndex: "user",
    render(value) {
      return <div>{value?.firstName}</div>;
    },
  },
  {
    title: "Address",
    dataIndex: "agency",
    render(value) {
      return <div>{value?.address}</div>;
    },
  },
  {
    title: "Assign",
    key: "level",
    dataIndex: "level",
    render: (_, record) => (
      <div className="flex gap-2 flex-wrap">
        <ModalAssign record={record}>
          <MdAssignmentAdd size={20} className="cursor-pointer" />
        </ModalAssign>
      </div>
    ),
  },
  {
    title: "Date",
    key: "Date",
    dataIndex: "createdAt",
    render: (date) => <>{dayjs(date).format("DD-MM-YYYY")}</>,
  },
];
