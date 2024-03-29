"use client";

import { EmployerType, Level } from "@/types/employer";
import { Divider, TableProps, Tag, Tooltip } from "antd";
import dayjs from "dayjs";

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
    key: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Company",
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
    title: "Level",
    key: "level",
    dataIndex: "level",
    render: (level) => (
      <div className="flex gap-2 flex-wrap">
        {level?.map((i: Level) => (
          <Tag color="cyan" key={i.levelName}>
            {i?.levelName}
          </Tag>
        ))}
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
