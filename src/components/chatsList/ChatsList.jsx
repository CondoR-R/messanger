import ChatCard from "../chatCard/ChatCard";
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
      <div className={style.chats}>
        <ChatCard isActive={false} />
        <ChatCard isActive={true} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
        <ChatCard isActive={false} />
      </div>
    </div>
  );
}

export default ChatsList;
