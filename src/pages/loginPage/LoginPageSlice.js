import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false, user: {} };

const loginPageSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    logOut(state) {
      state.isLogin = false;
      state.user = {};
    },
  },
});

export default loginPageSlice.reducer;
export const { logIn, logOut } = loginPageSlice.actions;
