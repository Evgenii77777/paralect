import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../assets/Frame.svg";
import Search from "../../assets/search.svg";
import { fetchList } from "../../redux/thunk/async/get-list";
import { fetchUser } from "../../redux/thunk/async/get-user";
import style from "./Header.module.css";

const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    setValue(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(value));
    dispatch(fetchList(value));
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img width="40px" height="40px" src={Logo} alt="logo" />
      </div>
      <div className={style.form__container}>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <label htmlFor="search" className={style.label}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter GitHub username"
              className={style.input}
              onChange={(e) => onHandleChange(e)}
            />
            <img className={style.img} src={Search} alt="search" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Header;
