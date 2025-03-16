import style from "./ChatsList.module.css";

function ChatsList() {
  return (
    <div className={style.chatsList}>
      <div className={style.header}>
        <form action="#">
          <label htmlFor="search" className={style.searchLabel}>
            <img src="/search.svg" alt="" className={style.searchIcon} />
            <input
              type="text"
              id="search"
              className={style.searchInput}
              placeholder="Поиск"
            />
          </label>
        </form>
      </div>
      <div className={style.chats}>чаты</div>
    </div>
  );
}

export default ChatsList;
