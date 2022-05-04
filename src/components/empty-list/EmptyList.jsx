import Union from "../../assets/Union.svg";
import style from "./EmptyList.module.css";

const EmptyList = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={Union} alt="nion" />
        <h3 className={style.text}>Repository list is empty</h3>
      </div>
    </div>
  );
};

export default EmptyList;
