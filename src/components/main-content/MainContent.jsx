import Search from "../../assets/searchBig.svg";
import style from "../main/Main.module.css";

const MainContent = () => {
  return (
    <div className={style.wrapper}>
      <img src={Search} alt="search" />
      <h2 className={style.title}>Start with searching a GitHub user</h2>
    </div>
  );
};

export default MainContent;
