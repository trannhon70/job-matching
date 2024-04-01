import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getEmployerList } from "@/sevices/apis/admin/employer";
import { EmployerType } from "@/types/employer";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import FilterBox from "./FilterBox";
import { columns } from "./columns";

const CorporateUserTable = () => {
  const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      startDate: "",
      endDate: "",
      level: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.CORPORATE, pagination, filter],
    queryFn: () => {
      return getEmployerList({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: EmployerType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as EmployerType[]) ?? [],
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

export default CorporateUserTable;
