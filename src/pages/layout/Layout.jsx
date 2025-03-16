import style from "./Layout.module.css";

import Header from "../../components/header/Header";
import MainPage from "../mainPage/MainPage";

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default Layout;
