import { InterViewType } from "@/types/interview";
import { TableProps, Tag, Tooltip } from "antd";
import JoinButton from "./JoinButton";

export const columns: TableProps<InterViewType>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Meeting Date Time",
    key: "Meeting Date Time",
    children: [
      {
        title: "Begin",
        key: "Begin",
        render: (_, record) => (
          <p className="whitespace-nowrap">{`${record?.date} ${record?.hour}:${record?.minute} ${record?.periodTime}`}</p>
        ),
      },
      {
        title: "Estimate/End",
        key: "End",
        render: (_, record) => (
          <p className="whitespace-nowrap">{`${
            record?.endDate ?? record?.estimateDate
          } ${record?.endHour ?? record?.estimateHour}:${
            record?.endMinute ?? record?.estimateMinute
          } ${record.estimatePeriodTime}`}</p>
        ),
      },
      {
        title: "Time zone",
        key: "Time zone",
        dataIndex: "timeZone",
        render: (timeZone) => (
          <p className="whitespace-nowrap">{`UTC ${
            timeZone > 0 ? `+${timeZone}` : timeZone
          }:00`}</p>
        ),
      },
    ],
  },
  {
    title: "Room ID",
    key: "Room ID",
    dataIndex: "roomId",
  },
  {
    title: "Meeting Title",
    key: "Meeting Title",
    dataIndex: "title",
  },
  {
    title: "Job Title",
    key: "Job Title",
    dataIndex: "job",
    render: (job) => <>{job?.jobTitle}</>,
  },
  {
    title: "Companies Interviewed",
    key: "Companies Interviewed",
    render: (_, record) => (
      <>
        {record.isActivate ? (
          <span>{record.job?.company?.companyName}</span>
        ) : (
          <Tooltip placement="top" title={"This company is unavailable"}>
            <span className="text-red-500">
              {record.job?.company?.companyName}
            </span>
          </Tooltip>
        )}
      </>
    ),
  },
  {
    title: "Interviewee",
    key: "Interviewee",
    dataIndex: "user",
    render: (user) => <>{`${user?.firstName} ${user?.lastName}`}</>,
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "status",
    render: (status) => (
      <>
        {status ? (
          <Tag color="orange">Previous</Tag>
        ) : (
          <Tag color="cyan">Scheduled</Tag>
        )}
      </>
    ),
  },
  {
    title: "Enter a Meeting Covertly",
    key: "Enter a Meeting Covertly",
    render: (_, record) => (
      <JoinButton
        interviewId={record.id}
        roomId={record.roomId}
        disabled={record.status || !record.isActivate}
      />
    ),
  },
];
