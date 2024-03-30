import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { queryClient } from "@/libs/react-query";
import { updateActiveStatus } from "@/sevices/apis/admin/company";
import { FormatErrorResponse } from "@/types/axios";
import { Checkbox, Popconfirm, Spin } from "antd";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

interface Props {
  checked: boolean;
  companyId: number;
}

const ActiveCheckbox: React.FC<Props> = ({ checked, companyId }) => {
  const mutation = useMutation({
    mutationFn: (body: { status: string; id: number[] }) =>
      updateActiveStatus(body),
    onSuccess: (res) => {
      toast.success(res?.data?.message);
      queryClient.invalidateQueries({
        queryKey: [AdminQueryKeyEnum.COMPANY],
      });
    },
    onError: (err) => {
      const error = err as FormatErrorResponse;
      toast.error(error.response.data.message);
    },
  });

  const confirm = () => {
    mutation.mutate({ id: [companyId], status: `${!checked}` });
  };

  return (
    <Popconfirm
      title="Change company's status"
      onConfirm={confirm}
      description="Are you sure to continue the decision?"
      okText="Yes"
      cancelText="No">
      <Checkbox checked={checked} />
      {mutation.isLoading && <Spin className="ml-2" size="small" />}
    </Popconfirm>
    
  );
};

export default ActiveCheckbox;
