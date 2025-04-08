import { useState } from "react";
import style from "./FormStyles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../loginPage/LoginPageSlice";
import { useSelector } from "react-redux";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isWrongUser, setIsWrongUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.loginPage.isLogin);
  if (isLogin) {
    navigate("/", { replace: true });
  }

  /**Симуляция работы с сервером
   * так как в данный момент "базой данных" является json файл проверка
   * авторизации, выполняемая на стороне сервера, выполняется внутри функции
   * отправки. Получение данных происходит при запуске страницы логина
   */
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:9000/accounts");
      const usersFromServer = await res.json();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  const handleChangeShowPassword = () => {
    setIsShowPassword((isShow) => !isShow);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    setIsEmpty(false);
    setIsWrongUser(false);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setIsEmpty(false);
    setIsWrongUser(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    // попытка отправить форму при пустых полях
    if (!login || !password) {
      setIsEmpty(true);
      return;
    }

    const user = {
      login,
      password,
    };

    // проверка на правильность данных аккаунта
    const userFromServer = users.find(
      (u) => u.login === user.login && u.password === user.password
    );

    if (userFromServer) {
      dispatch(logIn(userFromServer));
      navigate("/", { replace: true });
    } else {
      setIsWrongUser(true);
    }
  };

  return (
    <div className={style.enviroment}>
      <div className={style.loginBox}>
        <h2 className={style.title}>Войти в аккаунт</h2>
        <form onSubmit={submitForm} className={style.form} action="#">
          <div className={style.formGroup}>
            {/* логин */}
            <input
              type="text"
              className={`${style.loginInput} ${
                isEmpty && !login ? style.empty : ""
              }`}
              placeholder="Логин"
              value={login}
              onChange={handleChangeLogin}
            />

            {/* пароль */}
            <div
              className={`${style.passwordGroup} ${
                isEmpty && !password ? style.empty : ""
              }`}
            >
              <input
                className={style.passwordInput}
                type={isShowPassword ? "text" : "password"}
                placeholder="Пароль"
                value={password}
                onChange={handleChangePassword}
              />
              <button
                type="button"
                className={style.passwordBtn}
                onClick={handleChangeShowPassword}
              >
                <img
                  src={
                    isShowPassword ? "/show-password.png" : "/hide-password.png"
                  }
                  alt="show"
                  className={style.passwordImg}
                />
              </button>
            </div>
          </div>

          {/* предупреждения */}
          <div className={style.emptyMessage}>
            {isEmpty && <p>Поля не должны быть пустыми!</p>}
            {isWrongUser && <p>Неверные логин и/или пароль</p>}
          </div>

          {/* кнопки отравки и смены режима */}
          <div className={style.buttonsGroup}>
            <button className={style.submitBtn} type="submit">
              Войти
            </button>
            <div className={style.swapGroup}>
              <span className={style.swapSpan}>Нет аккаунта?</span>
              <Link to="/registration" className={style.swapBtn}>
                Создать
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
