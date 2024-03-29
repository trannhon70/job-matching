import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  jobSlug: string;
}

const ViewDetailJobButton: React.FC<Props> = ({ jobSlug }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="primary"
      onClick={() => {
        navigate(`/admin/job/${jobSlug}`);
      }}>
      View
    </Button>
  );
};

export default ViewDetailJobButton;
