import style from "./Layout.module.css";

import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
