import { Pagination } from "antd";

interface Props {
  total: number;
  currentPage: number;
  limit: number;
  onChange: (page: number) => void;
}

const TablePagination: React.FC<Props> = ({
  total,
  currentPage,
  limit,
  onChange,
}) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <Pagination
        current={currentPage}
        pageSize={limit}
        onChange={onChange}
        className="mx-auto"
        defaultCurrent={1}
        total={total}
      />
    </div>
  );
};

export default TablePagination;
