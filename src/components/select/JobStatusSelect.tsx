import { JobPostingStatus } from "@/enums/admin";
import { Select } from "antd";
import { useMemo } from "react";

type Props = {
  isFilterMode?: boolean;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const JobStatusSelect: React.FC<Props> = ({
  value,
  className,
  placeholder = "",
  isFilterMode = false,
  onChange,
}) => {
  const options = useMemo(() => {
    let jobPostingStatusArray = Object.keys(JobPostingStatus)
      .filter((key: any) => !isNaN(Number(JobPostingStatus[key])))
      .map((key: any) => ({ label: key, value: JobPostingStatus[key] }));

    if (isFilterMode) {
      jobPostingStatusArray = [
        { label: "All", value: "" },
        ...jobPostingStatusArray,
      ];
    }
    return jobPostingStatusArray;
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

export default JobStatusSelect;
