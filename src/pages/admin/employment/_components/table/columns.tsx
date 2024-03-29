import { EmploymentType } from "@/types/employment";
import { TableProps, Tooltip } from "antd";
import dayjs from "dayjs";

export const columns: TableProps<EmploymentType>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Unique Code",
    key: "Unique Code",
    dataIndex: "unitCode",
  },
  {
    title: "Job Title",
    key: "Job Title",
    dataIndex: "jobTitle",
  },
  {
    title: "Company",
    key: "Company",
    render: (_, record) => (
      <>
        {record.isActivate ? (
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
    title: "Company Contact",
    key: "Contact",
    dataIndex: "company",
    render: (company) => <>{company?.phone}</>,
  },
  {
    title: "Recruiter",
    key: "Recruiter",
    dataIndex: "company",
    render: (company) => <>{company?.employer?.[0]?.name}</>,
  },
  {
    title: "Contact",
    key: "Contact",
    dataIndex: "company",
    render: (company) => (
      <>
        {company?.employer?.[0]?.email}
        <br />
        {company?.employer?.[0]?.phone}
      </>
    ),
  },
  {
    title: "Date",
    key: "Date",
    dataIndex: "startDate",
    render: (date) => <>{dayjs(date).format("DD-MM-YYYY")}</>,
  },
];
