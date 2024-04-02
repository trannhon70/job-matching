/* eslint-disable @typescript-eslint/no-unused-vars */

// import { register } from "@/sevices/apis/auth/authApi";
import { Token } from "@/enums/admin";
import { setAuthenticated } from "@/redux/slices/auth/authSlice";
import { LoginPostAgency } from "@/sevices/apis/admin/agency";
import { LoginField, LoginResponse } from "@/types/auth";
import { setCookie } from "@/utils/cookie";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginAgency = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate();
  const mutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: LoginField) => {
      return LoginPostAgency(body);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    onSuccess: (res: any) => {
      if (res.data.error === false) {
        const data = res?.data?.data as LoginResponse;
        setCookie(Token.ACCESS_TOKEN, data.token);
        dispatch(setAuthenticated(data.infoUser));
        navigate("/admin/dashboard");
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      console.log(err);
      if (err.response.data.code === 493) {
        const data = err?.response?.data?.data as LoginResponse;
        setCookie(Token.ACCESS_TOKEN, data.token);
        dispatch(setAuthenticated(data.infoUser));
        navigate(`/template-agency/${err.response.data.data?.infoUser?.id}`);
      }
      if (err.response.data.message === "YOU_MUST_CREATE_AN_AGENCY") {
        toast.success("YOU MUST CREATE AN AGENCY");
      } else {
        toast.error(err.response.data.message);
      }
    },
  });

  const onFinish = (value: LoginField) => {
    const body = {
      email: value.email,
      password: value.password,
    } as LoginField;
    mutation.mutate(body);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div
        style={{
          border: "1px solid #d9d9d9",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="flex items-center justify-center text-3xl mb-5 ">
          Login Agency
        </div>

        <Form
          className="w-[400px]"
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
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
              type="primary"
              htmlType="submit"
              className="w-full h-[40px]"
            >
              Login
            </Button>
          </Form.Item>
          <p className="text-center text-base">
            Already have an account?
            <Link className="text-blue-600 underline" to="/register">
              Register
            </Link>
          </p>
          <p className="text-center text-base mt-4">
            <Link className="text-blue-600 underline" to="/login">
              Login with admin account
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginAgency;
