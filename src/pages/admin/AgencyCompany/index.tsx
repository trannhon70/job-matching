
import TablePagination from "@/components/table/TablePagination";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import usePaginationFilter from "@/hooks/table/usePaginationFilter";
import { getCompanyList } from "@/sevices/apis/admin/company";
import { CompanyType } from "@/types/company";
import { Table } from "antd";
import { useMemo } from "react";
import { useQuery } from "react-query";
import FilterBox from "./components/FilterBox";
import { columns } from "./components/columns";
const AgencyCompany = () => {
    const { filter, pagination, onChangeFilter, setCurrentPage } =
    usePaginationFilter({
      keyword: "",
      startDate: "",
      endDate: "",
      countryId: "",
      isActivate: "",
    });

  const { isFetching, data } = useQuery({
    queryKey: [AdminQueryKeyEnum.COMPANY, pagination, filter],
    queryFn: () => {
      return getCompanyList({ ...pagination, ...filter });
    },
  });

  const totalItems = useMemo(() => data?.data?.totalItem ?? 1, [data]);
  const dataSource = useMemo(
    () =>
      (data?.data?.data?.map((i: CompanyType, index: number) => ({
        ...i,
        key: i.id,
        no: (pagination.page - 1) * pagination.limit + index + 1,
      })) as CompanyType[]) ?? [],
    [data, pagination]
  );

    return<>
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
}

export default AgencyCompany