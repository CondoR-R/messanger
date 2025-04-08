import style from "./MainPage.module.css";

import ChatsList from "../../components/chatsList/ChatsList";
import Chat from "../../components/chat/Chat";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MainPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.loginPage.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLogin]);

  return (
    <div className={style.mainPage}>
      <ChatsList />
      <Chat />
    </div>
  );
}

export default MainPage;
