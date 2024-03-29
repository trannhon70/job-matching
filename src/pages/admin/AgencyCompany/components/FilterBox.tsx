import ActiveSelect from "@/components/select/ActiveSelect";
import CountrySelect from "@/components/select/CountrySelect";
import { Button, DatePicker, DatePickerProps } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface Props {
  onChangeFilter: (key: string, value: string | string[]) => void;
}

const FilterBox: React.FC<Props> = ({ onChangeFilter }) => {
  const [startDateState, setStartDateState] = useState<Dayjs | null>();
  const [endDateState, setEndDateState] = useState<Dayjs | null>();
  const onSearch: SearchProps["onSearch"] = (value) =>
    onChangeFilter("keyword", value);

  const onChangeCountry = (value: string) => {
    onChangeFilter("countryId", value);
  };

  const onChangeActive = (value: string) => {
    onChangeFilter("isActivate", value);
  };

  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    onChangeFilter("startDate", dateString);
    setStartDateState(date);
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    onChangeFilter("endDate", dateString);
    setEndDateState(date);
  };

  const onClickToday = () => {
    const currentDate = dayjs();
    const format = currentDate.format("YYYY-MM-DD");
    setStartDateState(currentDate);
    setEndDateState(currentDate);
    onChangeFilter("startDate", format);
    onChangeFilter("endDate", format);
  };

  return (
    <div className="mb-4 flex flex-wrap justify-end gap-4">
      <DatePicker
        value={startDateState}
        placeholder="Start Date"
        onChange={onChangeStartDate}
      />
      <DatePicker
        value={endDateState}
        placeholder="End Date"
        onChange={onChangeEndDate}
      />
      <Button onClick={onClickToday}>Today</Button>
      <CountrySelect
        isFilterMode
        onChange={onChangeCountry}
        className="w-[200px]"
        placeholder="Country Filter"
      />
      <ActiveSelect
        isFilterMode
        onChange={onChangeActive}
        className="w-[200px]"
        placeholder="Active Filter"
      />
      <Search
        className="w-[300px] min-w-[300px]"
        placeholder="Company name"
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
};

export default FilterBox;
