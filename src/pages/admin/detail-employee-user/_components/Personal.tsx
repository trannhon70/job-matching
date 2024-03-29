import { DetailEmployeeType } from "@/types/employee";
import { Card, Descriptions, Image } from "antd";
import { useMemo } from "react";

interface Props {
  data: DetailEmployeeType;
}

const Personal: React.FC<Props> = ({ data }) => {
  const items = useMemo(
    () => [
      {
        key: "First name",
        label: "First name",
        children: data?.firstName,
      },
      {
        key: "Last name",
        label: "Last name",
        children: data?.lastName,
      },
      {
        key: "Phone number",
        label: "Phone number",
        children: data?.phone,
      },
      {
        key: "Country",
        label: "Country",
        children: data?.country?.countryName,
      },
      {
        key: "City/Town",
        label: "City/Town",
        children: data?.province?.provinceName,
      },
      {
        key: "Street name",
        label: "Street name",
        children: data?.streetName,
      },
      {
        key: "Postal code",
        label: "Postal code",
        children: data?.postalCode,
      },
    ],
    []
  );
  return (
    <Card title="Personal Information">
      <div className="grid grid-cols-4 gap-x-4">
        <Image className="w-full" src={data?.avatarUrl} />
        <div className="col-span-3">
          <Descriptions column={1} bordered items={items} />
        </div>
      </div>
    </Card>
  );
};

export default Personal;
