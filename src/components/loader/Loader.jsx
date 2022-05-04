import { Audio } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.wrapper__loader}>
          <Audio height="100" width="100" color="blue" ariaLabel="loading" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
