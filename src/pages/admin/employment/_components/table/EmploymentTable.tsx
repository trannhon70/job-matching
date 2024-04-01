import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getEmployment } from "@/sevices/apis/admin/employment";
import { EmploymentType } from "@/types/employment";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import ProgressCheck from "../progress/ProgressCheck";
import FilterBox from "./FilterBox";
import { columns } from "./columns";
const EmploymentTable = () => {
  const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      recruiter: "",
      startDate: "",
      endDate: "",
      counts: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.EMPLOYMENT, pagination, filter],
    queryFn: () => {
      return getEmployment({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: EmploymentType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as EmploymentType[]) ?? [],
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
        expandable={{
          expandedRowRender: (record) => {
            return (
              <ProgressCheck
                isActive={record.isActivate}
                key={uuidv4()}
                data={record?.manageJob?.[0]}
                jobId={record.id}
              />
            );
          },
        }}
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

export default EmploymentTable;
