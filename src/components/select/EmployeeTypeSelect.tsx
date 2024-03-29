import { EmployeeType } from "@/enums/admin";
import { LooseType } from "@/types/select";
import { Select } from "antd";
import { useMemo } from "react";

type Props = {
  isFilterMode?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const EmployeeTypeSelect: React.FC<Props> = ({
  value,
  className,
  placeholder = "",
  isFilterMode = false,
  onChange,
}) => {
  const options = useMemo(() => {
    let optionsArr = Object.keys(EmployeeType).map((key: string) => ({
      label: key,
      value: (EmployeeType as LooseType)[key],
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

export default EmployeeTypeSelect;
