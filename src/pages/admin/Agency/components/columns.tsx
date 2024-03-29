import { CompanyType } from "@/types/company";
import { TableProps } from "antd";
import dayjs from "dayjs";
import ActiveCheckbox from "./ActiveCheckbox";
import ViewDetailButton from "./ViewDetailButton";

export const columns: TableProps<CompanyType>["columns"] = [
  {
    title: "No",
    key: "no",
    dataIndex: "no",
  },
  {
    title: "Company Name",
    key: "agencyName",
    dataIndex: "agencyName",
  },
  {
    title: "Country",
    key: "Country",
    dataIndex: "country",
    render: (country) => <>{country?.countryName}</>,
  },
  {
    title: "Address",
    key: "Address",
    dataIndex: "address",
  },
  {
    title: "Contact Name",
    key: "contactName",
    dataIndex: "contactName",
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Date",
    key: "Date",
    dataIndex: "createdAt",
    render: (date) => <>{dayjs(date).format("DD-MM-YYYY")}</>,
  },
  {
    title: "Detail",
    key: "Detail",
    render: (_, record) => <ViewDetailButton companySlug={record.slug} />,
  },
  {
    title: "Active",
    key: "Active",
    dataIndex: "isActivate",
    render: (_, record) => (
      <ActiveCheckbox checked={record.isActivate} companyId={record.id} />
    ),
  },
];
