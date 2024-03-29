import { DetailJobType } from "@/types/job";
import { Card, Descriptions, DescriptionsProps } from "antd";

interface Props {
  data: DetailJobType;
}

const Company: React.FC<Props> = ({ data }) => {
  const items: DescriptionsProps["items"] = [
    {
      key: "Company",
      label: "Company",
      children: data?.company?.companyName,
    },
    {
      key: "Industry",
      label: "Industry",
      children: data?.company?.industry?.industryName,
    },
    {
      key: "Address",
      label: "Address",
      children: data?.company?.address,
    },
    {
      key: "Website",
      label: "Website",
      children: data?.company?.webPage,
    },
    {
      key: "Introduction",
      label: "Introduction",
      children: (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.company?.information,
          }}></div>
      ),
    },
  ];

  return (
    <Card>
      <Descriptions bordered title="Company" column={1} items={items} />
    </Card>
  );
};

export default Company;
