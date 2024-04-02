import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { getStatisticDashboard } from "@/sevices/apis/admin/statistic";
import { Spin } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useQuery, useQueryClient } from "react-query";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { formatDateEnd, formatDateStart } from "@/utils/formatDate";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Statistic"];

const Page = () => {
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState(formatDateStart());
  const [endDate, setEndDate] = useState(formatDateEnd());
  const [month, setMonth] = useState<Dayjs | null>();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useQuery({
    queryKey: [AdminQueryKeyEnum.STATISTIC, endDate, startDate],
    queryFn: () => {
      return getStatisticDashboard({ endDate, startDate });
    },
  });

  const onChange = (date: dayjs.Dayjs) => {
    if (date) {
      const firstDayOfMonth = date.startOf("month").format("YYYY-MM-DD");
      const lastDayOfMonth = date.endOf("month").format("YYYY-MM-DD");

      setStartDate(firstDayOfMonth);
      setEndDate(lastDayOfMonth);
    }
  };

  const formattedData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "Employee",
          data: [data?.data?.data?.employeeCount ?? 0],
          backgroundColor: "#fecaca",
        },
        {
          label: "Employer",
          data: [data?.data?.data?.employerCount ?? 0],
          backgroundColor: "#fed7aa",
        },
        {
          label: "Job",
          data: [data?.data?.data?.jobCount ?? 0],
          backgroundColor: "#bbf7d0",
        },
        {
          label: "Apply",
          data: [data?.data?.data?.applyCount ?? 0],
          backgroundColor: "#a5f3fc",
        },
        {
          label: "Interview",
          data: [data?.data?.data?.interviewCount ?? 0],
          backgroundColor: "#e9d5ff",
        },
      ],
    };
  }, [data]);

  const onClickToday = () => {
    queryClient.removeQueries([AdminQueryKeyEnum.STATISTIC]);
    setStartDate(formatDateStart());
    setEndDate(formatDateEnd());
    setMonth(null);
  };

  const onClickAll = () => {
    queryClient.removeQueries([AdminQueryKeyEnum.STATISTIC]);
    setStartDate("");
    setEndDate("");
    setMonth(null);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Spin />
      </div>
    );

  return (
    <Fragment>
      <div className="flex items-start justify-start">
        <button
          onClick={onClickToday}
          className="w-[100px] h-[32px] text-white bg-lime-400 hover:bg-lime-500 rounded "
        >
          Today
        </button>
        <DatePicker
          className=" ml-1 rounded  cursor-pointer "
          onChange={onChange}
          placeholder="Select month"
          picker="month"
          value={month}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onFocus={() => setMonth(undefined)}
        />
        <button
          onClick={onClickAll}
          className="w-[100px] h-[32px] text-white ml-1 bg-red-400 hover:bg-red-500 rounded "
        >
          All
        </button>
      </div>
      <Bar options={options} data={formattedData} />
    </Fragment>
  );
};

export default Page;
