import { theme } from "@/libs/antd-theme";
import { queryClient } from "@/libs/react-query";
import store from "@/redux/store";
import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

interface AppProviderProps {
  children: ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ConfigProvider theme={theme}>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default AppProvider;
