import { ManageJobEnum } from "@/enums/admin";
import { AdminQueryKeyEnum } from "@/enums/queryKey";
import { queryClient } from "@/libs/react-query";
import { updateJobStep } from "@/sevices/apis/admin/employment";
import { FormatErrorResponse } from "@/types/axios";
import { Confirm, ConfirmBody } from "@/types/employment";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "antd";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

interface Props {
  disabled: boolean;
  data: Confirm;
  jobId: number;
  currentStep: ManageJobEnum;
}

const Note: React.FC<Props> = ({ data, jobId, currentStep, disabled }) => {
  const textEditorValue = useRef("");

  const mutation = useMutation({
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

  const onSave = () => {
    mutation.mutate({ name: currentStep, text: textEditorValue.current });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <CKEditor
        disabled={disabled}
        editor={ClassicEditor}
        data={data.text}
        onChange={(_, editor) => {
          // setText(editor.getData());
          textEditorValue.current = editor.getData();
          // console.log("first", editor.getData());
        }}
      />
      <Button
        loading={mutation.isLoading}
        disabled={mutation.isLoading || disabled}
        onClick={onSave}
        type="primary"
        className="w-fit mx-auto">
        Save
      </Button>
    </div>
  );
};

export default Note;
