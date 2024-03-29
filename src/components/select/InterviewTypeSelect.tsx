import { InterviewType } from "@/enums/admin";
import { Select } from "antd";
import { useMemo } from "react";

type Props = {
  isFilterMode?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const InterviewTypeSelect: React.FC<Props> = ({
  value,
  className,
  placeholder = "",
  isFilterMode = false,
  onChange,
}) => {
  const options = useMemo(() => {
    let interviewTypeArray = Object.keys(InterviewType)
      .filter((key: any) => !isNaN(Number(InterviewType[key])))
      .map((key: any) => ({ label: key, value: InterviewType[key] }));

    if (isFilterMode) {
      interviewTypeArray = [{ label: "All", value: "" }, ...interviewTypeArray];
    }
    return interviewTypeArray;
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

export default InterviewTypeSelect;
