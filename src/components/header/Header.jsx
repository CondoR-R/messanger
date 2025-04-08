import { useSelector } from "react-redux";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../pages/loginPage/LoginPageSlice";

function Header() {
  const user = useSelector((state) => state.loginPage.user);
  const isLogin = useSelector((state) => state.loginPage.isLogin);

  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <h1 className={style.title}>Messanger</h1>
      <div className={style.rightSide}>
        <span className={style.account}>
          {isLogin ? `${user.name} ${user.lastName}` : "Имя пользователя"}
        </span>
        <button onClick={() => dispatch(logOut())} className={style.exitButton}>
          Выйти
        </button>
      </div>
    </header>
  );
}

export default Header;
