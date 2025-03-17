import { useState } from "react";
import style from "./LoginPage.module.css";

function LoginPage() {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleChangeRegistration = () => {
    setIsRegistration((prev) => !prev);
  };

  const handleChangeShowPassword = () => {
    setIsShowPassword((isShow) => !isShow);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.enviroment}>
      <div className={style.loginBox}>
        <h2 className={style.title}>
          {isRegistration ? "Создать аккаунт" : "Войти в аккаунт"}
        </h2>
        <form onSubmit={submitForm} className={style.form} action="#">
          <div className={style.formGroup}>
            <input
              type="text"
              className={style.loginInput}
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className={style.passwordGroup}>
              <input
                className={style.passwordInput}
                type={isShowPassword ? "text" : "password"}
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
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
            {isRegistration && (
              <div className={style.passwordGroup}>
                <input
                  className={style.passwordInput}
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={(e) => {
                    setRepeatPassword(e.target.value);
                  }}
                />
                <button
                  className={style.passwordBtn}
                  onClick={handleChangeShowPassword}
                >
                  <img
                    src={
                      isShowPassword
                        ? "/show-password.png"
                        : "/hide-password.png"
                    }
                    alt="show"
                    className={style.passwordImg}
                  />
                </button>
              </div>
            )}
          </div>
          <div className={style.buttonsGroup}>
            <button className={style.submitBtn} type="submit">
              {isRegistration ? "Создать" : "Войти"}
            </button>
            <div className={style.swapGroup}>
              <span className={style.swapSpan}>
                {isRegistration ? "Есть аккаунт?" : "Нет аккаунта?"}
              </span>
              <button
                onClick={handleChangeRegistration}
                className={style.swapBtn}
              >
                {isRegistration ? "Войти" : "Создать"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
