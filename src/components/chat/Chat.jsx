import Message from "../message/Message";
import style from "./Chat.module.css";

function Chat() {
  return (
    <div className={style.chatBox}>
      {/* верхняя часть */}
      <div className={style.header}>
        <h1 className={style.name}>Имя</h1>
      </div>

      {/* зона чата */}
      <div className={style.chat}>
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
        <Message type={"you"} />
        <Message type={"interlocutor"} />
      </div>

      {/* нижняя часть */}
      <div className={style.sendBox}>
        <form action="#" className={style.sendForm}>
          <label htmlFor="messageInput" className={style.messageLabel}>
            <input
              type="text"
              id="messageInput"
              placeholder="Сообщение"
              className={style.messageInput}
            />
          </label>
          <button className={style.sendButton}>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
