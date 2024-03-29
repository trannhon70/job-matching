import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getInterviewList } from "@/sevices/apis/admin/interview";
import { InterViewType } from "@/types/interview";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import FilterBox from "./FilterBox";
import { columns } from "./columns";

const InterviewTable = () => {
  const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      startDate: "",
      endDate: "",
      status: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.INTERVIEW, pagination, filter],
    queryFn: () => {
      return getInterviewList({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: InterViewType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as InterViewType[]) ?? [],
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

export default InterviewTable;
