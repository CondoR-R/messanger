import style from "./Layout.module.css";

import Header from "../../components/header/Header";
import MainPage from "../mainPage/MainPage";
import LoginPage from "../loginPage/LoginPage";

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <main>
        <LoginPage />
      </main>
    </div>
  );
}

export default Layout;
