import style from "./ChatCard.module.css";

function ChatCard({ isActive }) {
  // сделать троеточие, если текст не влезает (35 символов + ... для имени, 40 + ... для сообщения)
  return (
    <div className={`${style.card} ${isActive ? style.active : ""}`}>
      <p className={style.name}>Иван Иванов</p>
      <p className={style.message}>Последнее сообщение</p>
    </div>
  );
}

export default ChatCard;
