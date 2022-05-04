import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Main.module.css";
import EmptyList from "../empty-list/EmptyList";
import NotFoundUser from "../not-found-user/NotFoundUser";
import MainContent from "../main-content/MainContent";
import User from "../user/User";
import UserList from "../user-list/UserList";
import Error from "../error/Error";

const Main = () => {
  const [empty] = useState(true);
  const isEmptyName = useSelector((state) => state.user.user);
  const isEmptyList = useSelector((state) => state.list.list);
  const errorList = useSelector((state) => state.list.error);
  const errorUser = useSelector((state) => state.user.error);

  return (
    <div className={empty ? style.container__full : style.container}>
      {isEmptyName.message === "Not Found" && <NotFoundUser />}
      {isEmptyName.length === 0 &&
        isEmptyName.message !== "Not Found" &&
        !errorUser && <MainContent />}
      {(errorList || errorUser) && <Error />}
      {isEmptyName.length !== 0 &&
        isEmptyName.message !== "Not Found" &&
        !errorList && (
          <div className={style.wrapper__user}>
            <User isEmptyName={isEmptyName} />
            <div className={style.repo__wrapper}>
              {isEmptyList.length === 0 ? (
                <EmptyList />
              ) : (
                <UserList isEmptyName={isEmptyName} isEmptyList={isEmptyList} />
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default Main;
