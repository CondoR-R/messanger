import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Messanger</h1>
      <div className={style.rightSide}>
        <span className={style.account}>Дмитрий Латкин</span>
        <button className={style.exitButton}>Выйти</button>
      </div>
    </header>
  );
}

export default Header;
