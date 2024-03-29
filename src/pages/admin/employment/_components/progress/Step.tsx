import { ManageJobEnum } from "@/enums/admin";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { queryClient } from "@/libs/react-query";
import { updateJobStep } from "@/sevices/apis/admin/employment";
import { FormatErrorResponse } from "@/types/axios";
import { Confirm, ConfirmBody } from "@/types/employment";
import { Button, Card, Typography } from "antd";
import classNames from "classnames";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const { Text } = Typography;

interface Props {
  disabled: boolean;
  isActive: boolean;
  jobId: number;
  title: string;
  data: Confirm;
  name: ManageJobEnum;
  setActiveCurrentStep: (step: ManageJobEnum) => void;
}

const Step: React.FC<Props> = ({
  title,
  data,
  name,
  jobId,
  isActive,
  disabled,
  setActiveCurrentStep,
}) => {
  const confirmMutation = useMutation({
    mutationFn: (body: ConfirmBody) => {
      return updateJobStep(jobId, body);
    },
    onSuccess: (res) => {
      toast.success(res?.data?.message);
      queryClient.invalidateQueries({
        queryKey: [AdminQueryKeyEnum.EMPLOYMENT],
      });
    },
    onError: (err) => {
      const error = err as FormatErrorResponse;
      toast.error(error.response.data.message);
    },
  });

  return (
    <Card
      onClick={() => {
        setActiveCurrentStep(name);
      }}
      title={<span className="whitespace-pre-line">{title}</span>}
      className={classNames(
        "w-full p-4 cursor-pointer relative",
        isActive && "ring-2 ring-sky-700"
      )}>
      {data.status ? (
        <div className="flex gap-2 flex-wrap items-center">
          <Text type="success">Confirmed</Text>
          <Button
            loading={confirmMutation.isLoading}
            disabled={confirmMutation.isLoading}
            onClick={() => {
              confirmMutation.mutate({ name, status: false });
            }}>
            Undo
          </Button>
        </div>
      ) : (
        <Button
          loading={confirmMutation.isLoading}
          disabled={confirmMutation.isLoading}
          type="primary"
          onClick={() => {
            confirmMutation.mutate({ name, status: true });
          }}>
          Confirm
        </Button>
      )}
      {/* Disabled Mask */}
      {disabled && <div className="absolute inset-0 bg-gray-900/20"></div>}
      {/* Disabled Mask */}
    </Card>
  );
};

export default Step;
