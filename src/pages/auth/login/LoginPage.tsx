import { Card } from "antd";
import { LoginForm } from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card title="Administrator Login">
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
