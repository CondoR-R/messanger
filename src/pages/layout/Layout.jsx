import style from "./Layout.module.css";

import Header from "../../components/header/Header";
import MainPage from "../mainPage/MainPage";
import LoginPage from "../loginPage/LoginPage";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
