import style from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={style.enviroment}>
      <p className={style.big}>404</p>
      <p className={style.small}>Страница не найдена...</p>
    </div>
  );
}

export default NotFoundPage;
