import { DetailJobType } from "@/types/job";
import { Card, Descriptions, DescriptionsProps, Statistic } from "antd";
import dayjs from "dayjs";

interface Props {
  data: DetailJobType;
}

const Primary: React.FC<Props> = ({ data }) => {
  const items: DescriptionsProps["items"] = [
    {
      key: "Job Title",
      label: "Job Title",
      children: data?.jobTitle,
      span: 2,
    },
    {
      key: "Description",
      label: "Description",
      children: data?.summary,
      span: 2,
    },
    {
      key: "Salary",
      label: "Salary",
      children: `${data?.salary} ${data.currency}`,
    },
    {
      key: "Job Type",
      label: "Job Type",
      children: data?.jobType,
    },
    {
      key: "Position",
      label: "Position",
      children: data?.positionName,
    },
    {
      key: "Period",
      label: "Period",
      children: `${dayjs(data?.periodStart).format(
        "DD-MM-YYYY HH:mm"
      )} - ${dayjs(data?.periodEnd).format("DD-MM-YYYY HH:mm")}`,
    },
  ];

  return (
    <Card className="h-full">
      <Descriptions
        bordered
        title="Primary information"
        column={2}
        items={items}
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <Card>
          <Statistic
            title="Save"
            value={data?.totalSave ?? 0}
            precision={0}
            valueStyle={{ color: "#3f8600" }}
          />
        </Card>
        <Card>
          <Statistic
            title="Apply"
            value={data?.apply?.length}
            precision={0}
            valueStyle={{ color: "#3f8600" }}
          />
        </Card>
        <Card>
          <Statistic
            title="View"
            value={data?.totalClick ?? 0}
            precision={0}
            valueStyle={{ color: "#3f8600" }}
          />
        </Card>
      </div>
    </Card>
  );
};

export default Primary;
