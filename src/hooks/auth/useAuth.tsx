import { Token } from "@/enums/admin";
import { reset } from "@/redux/slices/auth/authSlice";
import { clearCookie } from "@/utils/cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(reset());
    clearCookie(Token.ACCESS_TOKEN);
    navigate("/login");
  };
  return { handleLogOut };
};

export default useAuth;
