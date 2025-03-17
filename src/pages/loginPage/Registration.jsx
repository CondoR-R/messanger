import { useState } from "react";
import style from "./LoginPage.module.css";

function Registration({ handleChangeRegistration }) {
  // показать/скрыть пароль
  const [isShowPassword, setIsShowPassword] = useState(false);

  // запись полей инпутов
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  // есть ли пустые поля при отправке
  const [isEmpty, setIsEmpty] = useState(false);
  // совпадают ли пароли при регистрации
  const [isNotMatch, setIsNotMatch] = useState(false);

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
    setIsNotMatch(false);
  };

  const handleChangeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    setIsEmpty(false);
    setIsNotMatch(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setIsEmpty(false);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setIsEmpty(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setIsEmpty(false);
    setIsNotMatch(false);

    // попытка отправить форму при пустых полях
    if (!login || !password || !repeatPassword || !name || !lastName) {
      setIsEmpty(true);
      return;
    }

    // пароли не совпадают при регистрации
    if (password !== repeatPassword) {
      setIsNotMatch(true);
      return;
    }

    const newUser = {
      name,
      lastName,
      login,
      password,
    };

    console.log("Новый пользователь создан!", newUser);
  };

  return (
    <div className={style.loginBox}>
      <h2 className={style.title}>Создать аккаунт</h2>
      <form onSubmit={submitForm} className={style.form} action="#">
        <div className={style.formGroup}>
          {/* Имя */}
          <input
            type="text"
            className={`${style.loginInput} ${
              isEmpty && !name ? style.empty : ""
            }`}
            placeholder="Имя"
            value={name}
            onChange={handleChangeName}
          />

          {/* Фамилия */}
          <input
            type="text"
            className={`${style.loginInput} ${
              isEmpty && !lastName ? style.empty : ""
            }`}
            placeholder="Фамилия"
            value={lastName}
            onChange={handleChangeLastName}
          />

          {/* Логин */}
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
            } ${isNotMatch ? style.empty : ""}`}
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

          {/* повтор пароля */}
          <div
            className={`${style.passwordGroup} ${
              isEmpty && !repeatPassword ? style.empty : ""
            } ${isNotMatch ? style.empty : ""}`}
          >
            <input
              className={style.passwordInput}
              type={isShowPassword ? "text" : "password"}
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={handleChangeRepeatPassword}
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
          {isNotMatch && <p>Пароли не совпадают!</p>}
        </div>

        {/* кнопки отравки и смены режима */}
        <div className={style.buttonsGroup}>
          <button className={style.submitBtn} type="submit">
            Создать
          </button>
          <div className={style.swapGroup}>
            <span className={style.swapSpan}>Есть аккаунт?</span>
            <button
              type="button"
              onClick={handleChangeRegistration}
              className={style.swapBtn}
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
