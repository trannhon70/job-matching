import { resetPassword } from "@/sevices/apis/auth/authApi";
import { FormatErrorResponse } from "@/types/axios";
import { ChangePasswordType } from "@/types/setting";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const ChangePasswordForm = () => {
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: (body: { pass: string }) => {
      return resetPassword(body);
    },
    onSuccess: (res) => {
      toast.success(res?.data?.message);
      form.resetFields();
    },
    onError: (err) => {
      const error = err as FormatErrorResponse;
      toast.error(error.response.data.message);
    },
  });
  const onFinish = (values: ChangePasswordType) => {
    const { password, recheck } = values;
    if (password !== recheck) {
      toast.error("Passwords do not match.");
      return;
    }
    mutation.mutate({ pass: password });
  };
  return (
    <Form
      form={form}
      className="w-[400px]"
      name="change_password"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item<ChangePasswordType>
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item<ChangePasswordType>
        name="recheck"
        rules={[{ required: true, message: "Please input your Password!" }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Recheck"
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={mutation.isLoading}
          disabled={mutation.isLoading}
          type="primary"
          htmlType="submit"
          className="w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePasswordForm;
