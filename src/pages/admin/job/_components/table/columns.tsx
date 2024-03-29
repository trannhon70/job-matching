import { JobPostingStatus } from "@/enums/admin";
import { JobType } from "@/types/job";
import { Badge, TableProps, Tag, Tooltip } from "antd";
import dayjs from "dayjs";
import ViewDetailJobButton from "./ViewDetailJobButton";

export const columns: TableProps<JobType>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Job Title",
    key: "Job Title",
    dataIndex: "jobTitle",
  },
  {
    title: "Company Name",
    key: "Company Name",
    dataIndex: "company",
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
    title: "Job Card",
    key: "Job Card",
    render: (_, record) => <ViewDetailJobButton jobSlug={record.slug} />,
  },
  {
    title: "Status",
    key: "Status",
    dataIndex: "status",
    render: (status, record) => {
      let color = "volcano";
      if (status === JobPostingStatus.On_Going) color = "green";
      if (status === JobPostingStatus.Suspended) color = "blue";
      return !record.isActivate ? (
        <Tag color={"blue"}>{JobPostingStatus[2]}</Tag>
      ) : (
        <Tag color={color}>{JobPostingStatus[status]}</Tag>
      );
    },
  },
  {
    title: "Date",
    key: "Date",
    dataIndex: "startDate",
    render: (date) => <>{dayjs(date).format("DD-MM-YYYY")}</>,
  },
  {
    title: "Tracking",
    key: "Tracking",
    render: (_, record) => (
      <div className="flex gap-6">
        <div className="flex gap-2">
          <span>Save</span>
          <Badge
            color="#166534"
            showZero
            count={
              record?.statistical?.reduce(
                (acc, { save }) => acc + (save || 0),
                0
              ) ?? 0
            }
          />
        </div>
        <div className="flex gap-2">
          <span>Apply</span>
          <Badge color="#166534" showZero count={record?.apply?.length ?? 0} />
        </div>
        <div className="flex gap-2">
          <span>Interview</span>
          <Badge
            color="#166534"
            showZero
            count={record?.interview?.length ?? 0}
          />
        </div>
        <div className="flex gap-2">
          <span>Hired</span>
          <Badge color="#166534" showZero count={record?.apply?.length ?? 0} />
        </div>
      </div>
    ),
  },
];
