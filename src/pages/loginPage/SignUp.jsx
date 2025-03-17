import { useState } from "react";
import style from "./LoginPage.module.css";

function SignUp({ handleChangeRegistration }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);

  const handleChangeShowPassword = () => {
    setIsShowPassword((isShow) => !isShow);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    setIsEmpty(false);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setIsEmpty(false);
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

    console.log("Отправка данных на сервер для проверки данных", user);
  };

  return (
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
        </div>

        {/* кнопки отравки и смены режима */}
        <div className={style.buttonsGroup}>
          <button className={style.submitBtn} type="submit">
            Войти
          </button>
          <div className={style.swapGroup}>
            <span className={style.swapSpan}>Нет аккаунта?</span>
            <button
              type="button"
              onClick={handleChangeRegistration}
              className={style.swapBtn}
            >
              Создать
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
