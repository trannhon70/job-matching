import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getEmployeeList } from "@/sevices/apis/admin/employee";
import { EmployeeType } from "@/types/employee";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import FilterBox from "./FilterBox";
import { columns } from "./columns";

const EmployeeTable = () => {
  const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      startDate: "",
      endDate: "",
      fullProfile: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.EMPLOYEE, pagination, filter],
    queryFn: () => {
      return getEmployeeList({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: EmployeeType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as EmployeeType[]) ?? [],
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

export default EmployeeTable;
