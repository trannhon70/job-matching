"use client";

import { EmployerType } from "@/types/employer";
import { Divider, TableProps, Tooltip } from "antd";
import dayjs from "dayjs";
import { MdAssignmentAdd } from "react-icons/md";
import ModalAssign from "./modalAssign";

export const columns: TableProps<EmployerType>["columns"] = [
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
    key: "firstName",
    dataIndex: "firstName",
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Agency",
    key: "Company",
    dataIndex: "company",
    render: (_, record) => (
      <>
        {record?.company?.isActivate ? (
          <span>{record.company?.companyName}</span>
        ) : (
          <Tooltip placement="top" title={"This company is unavailable"}>
            <span className="text-red-500">{record.company?.companyName}</span>
          </Tooltip>
        )}
      </>
    ),
  },
  {
    title: "Address",
    key: "Address",
    render: (_, record) => (
      <>
        <span>{record?.country?.countryName}</span> <Divider type="vertical" />
        <span>{record?.address}</span>
      </>
    ),
  },
  {
    title: "Assign",
    key: "level",
    dataIndex: "level",
    render: () => (
      <div className="flex gap-2 flex-wrap">
        <ModalAssign>
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
