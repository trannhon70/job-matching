import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  userId: number;
}

const ViewDetailUserButton: React.FC<Props> = ({ userId }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="primary"
      onClick={() => {
        navigate(`/admin/employee-user/${userId}`);
      }}>
      View
    </Button>
  );
};

export default ViewDetailUserButton;
