import { Token } from "@/enums/admin";
import { setAuthenticated } from "@/redux/slices/auth/authSlice";
import { loginApi } from "@/sevices/apis/auth/authApi";
import { LoginField, LoginResponse } from "@/types/auth";
import { FormatErrorResponse } from "@/types/axios";
import { setCookie } from "@/utils/cookie";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: (body: LoginField) => {
      return loginApi(body);
    },
    onSuccess: (res) => {
      const data = res?.data?.data as LoginResponse;
      setCookie(Token.ACCESS_TOKEN, data.token);
      dispatch(setAuthenticated(data.infoUser));
      navigate("/admin/dashboard");
    },
    onError: (err) => {
      const error = err as FormatErrorResponse;
      toast.error(error.response.data.message);
    },
  });
  const onFinish = (values: LoginField) => {
    mutation.mutate(values);
  };
  return (
    <Form
      className="w-[400px]"
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item<LoginField>
        name="email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input
          className="h-[40px]"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item<LoginField>
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          className="h-[40px]"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={mutation.isLoading}
          disabled={mutation.isLoading}
          type="primary"
          htmlType="submit"
          className="w-full h-[40px]"
        >
          Log in
        </Button>
      </Form.Item>
      <p className="text-center text-base">
        Already have an account?
        <Link className="text-blue-600 underline" to="/register">
          Register
        </Link>
      </p>
    </Form>
  );
};
