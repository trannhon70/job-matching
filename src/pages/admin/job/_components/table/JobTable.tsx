import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getJobList } from "@/sevices/apis/admin/job";
import { JobType } from "@/types/job";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import FilterBox from "./FilterBox";
import { columns } from "./columns";

const JobTable = () => {
  const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      startDate: "",
      endDate: "",
      status: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.JOB, pagination, filter],

    queryFn: () => {
      return getJobList({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: JobType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as JobType[]) ?? [],
    [data, pagination]
  );

  return (
    <>
      <FilterBox onChangeFilter={onChangeFilter} />
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 1200 }}
      />
      <TablePagination
        limit={pagination.limit}
        onChange={setCurrentPage}
        currentPage={pagination.page}
        total={totalItems}
      />
    </>
  );
};

export default JobTable;
