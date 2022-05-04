import User from "../../assets/user.svg";
import style from "../main/Main.module.css";

const NotFoundUser = () => {
  return (
    <div className={style.wrapper}>
      <img src={User} alt="user" />
      <h2 className={style.title}>User not found</h2>
    </div>
  );
};

export default NotFoundUser;
