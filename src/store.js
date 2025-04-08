import { configureStore } from "@reduxjs/toolkit";
import loginPageSlice from "./pages/loginPage/LoginPageSlice";

const store = configureStore({
  reducer: {
    loginPage: loginPageSlice,
  },
});

export default store;
