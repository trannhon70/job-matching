import { DetailJobType } from "@/types/job";
import { Card, Descriptions, DescriptionsProps } from "antd";
import dayjs from "dayjs";

interface Props {
  data: DetailJobType;
}

const Information: React.FC<Props> = ({ data }) => {
  const detailInformation: DescriptionsProps["items"] = [
    {
      key: "Position",
      label: "Position",
      children: data?.positionName,
    },
    {
      key: "Skills and Abilities",
      label: "Skills and Abilities",
      children: data?.skillAbilities,
    },
    {
      key: "Specific Duties",
      label: "Specific Duties",
      children: data?.specificDuties,
    },
    {
      key: "Duty",
      label: "Duty",
      children: data?.duty,
    },
  ];

  const workCondition: DescriptionsProps["items"] = [
    {
      key: "Job Type",
      label: "Job Type",
      children: data?.jobType,
    },
    {
      key: "Starting Date",
      label: "Starting Date",
      children: dayjs(data?.startDate).format("DD-MM-YYYY HH:mm"),
    },
    {
      key: "Salary",
      label: "Salary",
      children: data?.salary,
    },
    {
      key: "Insurance",
      label: "Insurance",
      children: data?.insurance,
    },
    {
      key: "Hours",
      label: "Hours",
      children: data?.hour,
    },
    {
      key: "Accommodation",
      label: "Accommodation",
      children: data?.accommodation,
    },
    {
      key: "Visa",
      label: "Visa",
      children: data?.visa,
    },
    {
      key: "Vacation",
      label: "Vacation",
      children: data?.vacation,
    },
    {
      key: "Benefit",
      label: "Benefit",
      children: data?.benefit,
    },
  ];

  const apply: DescriptionsProps["items"] = [
    {
      key: "Period",
      label: "Period",
      children: `${dayjs(data?.periodStart).format(
        "DD-MM-YYYY HH:mm"
      )} - ${dayjs(data?.periodEnd).format("DD-MM-YYYY HH:mm")}`,
    },
    {
      key: "Date of recruitment",
      label: "Date of recruitment",
      children: dayjs(data?.dateRecruitment).format("DD-MM-YYYY HH:mm"),
    },
    {
      key: "Documents",
      label: "Documents",
      children: data?.document,
    },
    {
      key: "Process",
      label: "Process",
      children: data?.process,
    },
    {
      key: "HR Officer",
      label: "HR Officer",
      children: data?.officer,
    },
    {
      key: "Other",
      label: "Other",
      children: data?.other,
    },
  ];

  return (
    <Card className="w-full space-y-4">
      <div className="w-full space-y-4">
        <Descriptions
          bordered
          title="Detail information"
          column={2}
          items={detailInformation}
        />
        <Descriptions
          bordered
          title="Work Condition"
          column={2}
          items={workCondition}
        />
        <Descriptions bordered title="Apply" column={2} items={apply} />
      </div>
    </Card>
  );
};

export default Information;
