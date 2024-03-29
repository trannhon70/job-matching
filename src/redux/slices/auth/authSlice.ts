import { InfoUser } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  infoUser: InfoUser | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  infoUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.isAuthenticated = true;
      state.infoUser = payload;
    },
    reset: () => initialState,
  },
});

export const { setAuthenticated, reset } = authSlice.actions;
export default authSlice.reducer;
