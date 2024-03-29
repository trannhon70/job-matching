import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  companySlug: string;
}

const ViewDetailButton: React.FC<Props> = ({ companySlug }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="primary"
      onClick={() => {
        navigate(`/admin/company/${companySlug}`);
      }}>
      View
    </Button>
  );
};

export default ViewDetailButton;
