import { Token } from "@/enums/admin";
import { setAuthenticated } from "@/redux/slices/auth/authSlice";
import { register, sendCodeEmail } from "@/sevices/apis/auth/authApi";
import { IRegister, LoginResponse } from "@/types/auth";
import { setCookie } from "@/utils/cookie";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refForm: any = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: IRegister) => {
      return register(body);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (res) => {
      const data = res?.data?.data as LoginResponse;
      navigate(`/template-agency/${data.infoUser.id}`);
      setCookie(Token.ACCESS_TOKEN, data.token);
      dispatch(setAuthenticated(data.infoUser));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  const onFinish = (value: IRegister) => {
    const body = {
      email: refForm.current.input.value,
      code: value.code,
      password: value.password,
    } as IRegister;
    mutation.mutate(body);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishSendCode = (value: any) => {
    const body = {
      email: value.email,
    };
    sendCodeEmail(body)
      .then((res) => {
        // console.log(res, "res");
        toast.success(res.data.message);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      })
      .catch((error) => {
        // console.log(error, "err");
        toast.error(error.response.data.message);
      });
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
          Register Agency
        </div>
        <Form
          className="w-[400px]"
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinishSendCode}
          layout="vertical"
        >
          <Form.Item
            name="email"
            style={{ display: "flex !important" }}
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
            label="Email :"
          >
            <div className="flex">
              <Input
                ref={refForm}
                height={40}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
              />
              <Button
                className="h-[40px] ml-2"
                type="primary"
                htmlType="submit"
              >
                Send code
              </Button>
            </div>
          </Form.Item>
        </Form>
        <Form
          className="w-[400px]"
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item<IRegister>
            name="code"
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
            label="Verify code"
          >
            <Input
              //   prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Verify code"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item<IRegister>
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            label="Password:"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="h-[40px]"
            />
          </Form.Item>
          <Form.Item<IRegister>
            label="Confirm Password"
            name="password2"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              className="h-[40px]"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[40px]"
            >
              Sign up
            </Button>
          </Form.Item>
          <p className="text-center text-base">
            Already have an account?
            <Link className="text-blue-600 underline" to="/login-agency">
              Login Agency
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
