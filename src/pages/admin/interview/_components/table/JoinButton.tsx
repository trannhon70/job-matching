import { Token } from "@/enums/admin";
import { getCookie } from "@/utils/cookie";
import { Button } from "antd";

interface Props {
  interviewId: number;
  roomId: string;
  disabled?: boolean;
}

const JoinButton: React.FC<Props> = ({
  interviewId,
  roomId,
  disabled = false,
}) => {
  const accessToken = getCookie(Token.ACCESS_TOKEN);
  return (
    <a
      target="_blank"
      href={`${
        import.meta.env.VITE_APP_JOB_MATCHING_BASE_URL
      }/zoom?token=${accessToken}&room-id=${roomId}&interview-id=${interviewId}`}>
      <Button disabled={disabled} type={disabled ? "default" : "primary"}>
        Join
      </Button>
    </a>
  );
};

export default JoinButton;
