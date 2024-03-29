import { Card } from "antd";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordCard = () => {
  return (
    <Card className="max-w-xl mx-auto" title="Change password">
      <div className="flex justify-center flex-col items-center">
        <ChangePasswordForm />
      </div>
    </Card>
  );
};

export default ChangePasswordCard;
