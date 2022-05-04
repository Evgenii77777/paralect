import Provate from "../../assets/provate.svg";
import Group from "../../assets/group_24px.svg";
import style from "../main/Main.module.css";

const User = ({ isEmptyName }) => {
  return (
    <div className={style.user__container}>
      <img
        className={style.user__img}
        src={isEmptyName.avatar_url}
        alt="icon-user"
      />
      <p className={style.user__name}>{isEmptyName.name}</p>
      <a className={style.user__link} href={isEmptyName.html_url}>
        {isEmptyName.login}
      </a>
      <ul className={style.user__list}>
        <li>
          <img src={Group} alt="group" className={style.user__group} />
          <span>{isEmptyName.followers} followers</span>
        </li>
        <li>
          <img src={Provate} alt="provate" className={style.user__provate} />
          <span>{isEmptyName.following} following</span>
        </li>
      </ul>
    </div>
  );
};

export default User;
