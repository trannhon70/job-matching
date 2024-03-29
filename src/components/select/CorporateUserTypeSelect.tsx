import { EmployerLevel } from "@/enums/admin";
import { Select } from "antd";
import { useMemo } from "react";

type Props = {
  isFilterMode?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const CorporateUserTypeSelect: React.FC<Props> = ({
  value,
  className,
  placeholder = "",
  isFilterMode = false,
  onChange,
}) => {
  const options = useMemo(() => {
    let optionsArr = Object.keys(EmployerLevel)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((key: any) => !isNaN(Number(EmployerLevel[key])))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((key: any) => ({
        label: key,
        value: EmployerLevel[key],
      }));

    if (isFilterMode) {
      optionsArr = [{ label: "All", value: "" }, ...optionsArr];
    }
    return optionsArr;
  }, [isFilterMode]);

  return (
    <Select
      className={className}
      popupMatchSelectWidth={false}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={options}
    />
  );
};

export default CorporateUserTypeSelect;
