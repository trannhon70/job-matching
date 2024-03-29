import { useState } from "react";

const usePaginationFilter = <T,>(initialState: T) => {
  const [filter, setFilter] = useState<T>(initialState);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  const setCurrentPage = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const onChangeFilter = (key: string, value: string | string[]) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return {
    filter,
    pagination,
    onChangeFilter,
    setCurrentPage,
  };
};

export default usePaginationFilter;
