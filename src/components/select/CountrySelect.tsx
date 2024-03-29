import { SelectQueryKeyEnum } from "@/enums/queryKey";
import { getAllCountry } from "@/sevices/apis/admin/selecter";
import { CountryType } from "@/types/select";
import { Select } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";

type Props = {
  isFilterMode?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const CountrySelect: React.FC<Props> = ({
  value,
  className,
  placeholder = "",
  isFilterMode = false,
  onChange,
}) => {
  const { isLoading, data } = useQuery({
    queryKey: [SelectQueryKeyEnum.COUNTRY],
    queryFn: () => {
      return getAllCountry();
    },
  });

  const options = useMemo(() => {
    const res =
      data?.data
        ?.filter((i: CountryType) => i.countryName !== "All Countries")
        .map((item: CountryType) => ({
          value: item.id,
          label: item.countryName,
        })) ?? [];

    return isFilterMode ? [{ value: "", label: "All" }, ...res] : res;
  }, [data, isFilterMode]);

  return (
    <Select
      className={className}
      popupMatchSelectWidth={false}
      value={value}
      placeholder={placeholder}
      loading={isLoading}
      onChange={onChange}
      options={options}
    />
  );
};

export default CountrySelect;
