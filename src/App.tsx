import { Spin } from "antd";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Token } from "./enums/admin";
import { setAuthenticated } from "./redux/slices/auth/authSlice";
import RootRoutes from "./routes/Routes";
import { getCurrentUser } from "./sevices/apis/auth/authApi";
import { LoginResponse } from "./types/auth";
import { setCookie } from "./utils/cookie";

function App() {
  const dispatch = useDispatch();

  const { isLoading } = useQuery({
    queryKey: ["Authenticate"],
    queryFn: () => {
      return getCurrentUser();
    },
    onSuccess: (res) => {
      const data = res?.data?.data as LoginResponse;
      setCookie(Token.ACCESS_TOKEN, data.token);
      dispatch(setAuthenticated(data.infoUser));
    },
    onError: () => {},
  });
  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  return <RootRoutes />;
}

export default App;
