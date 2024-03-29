import { DetailCompanyType } from "@/types/company";
import { Card, Descriptions, Image } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailCompanyType;
}

const Information: React.FC<Props> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any = useMemo(
    () => [
      {
        key: "Company Name",
        label: "Company Name",
        children: data?.companyName,
      },
      {
        key: "Website",
        label: "Website",
        children: data?.webPage,
      },

      {
        key: "CEO",
        label: "CEO",
        children: data?.employer?.[0]?.name,
      },
      {
        key: "Foundation",
        label: "Foundation",
        children: data?.foundation,
      },
      {
        key: "industry",
        label: "Industry",
        children: data?.industry?.industryName,
      },
      {
        key: "Employee",
        label: "Employee",
        children: data?.employee,
      },

      {
        key: "Address",
        label: "Address",
        children: data?.address,
        span: 2,
      },
      {
        key: "About us",
        label: "About us",
        children: (
          <div dangerouslySetInnerHTML={{ __html: data?.information }}></div>
        ),
        span: 2,
      },
    ],
    [data]
  );

  return (
    <Card title="Company Information">
      <div className="grid w-full grid-cols-4 gap-x-4">
        <Image className="w-full" src={data?.fileLogo} />
        <div className="col-span-3">
          <Descriptions column={2} bordered items={items} />
        </div>
      </div>
    </Card>
  );
};

export default Information;
