import style from "./Message.module.css";

function Message({ type }) {
  return (
    <div className={style.messageBox}>
      <div
        className={`${style.message} ${
          type === "interlocutor" ? style.interlocutor : style.you
        }`}
      >
        <p className={style.text}>Какое-то сообщение.</p>
        <p className={style.date}>12:01</p>
      </div>
    </div>
  );
}

export default Message;
