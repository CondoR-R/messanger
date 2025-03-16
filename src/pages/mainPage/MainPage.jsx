import style from "./MainPage.module.css";

import ChatsList from "../../components/chatsList/ChatsList";
import Chat from "../../components/chat/Chat";

function MainPage() {
  return (
    <div className={style.mainPage}>
      <ChatsList />
      <Chat />
    </div>
  );
}

export default MainPage;
