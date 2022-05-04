import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../main/Main.module.css";
import Pagination from "../pagination/Pagination";

const UserList = ({ isEmptyList, isEmptyName }) => {
  const listError = useSelector((state) => state.list.error);
  const userError = useSelector((state) => state.user.error);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (isEmptyList.length !== 0 && !listError && !userError) {
      setCurrentItems(isEmptyList.slice(itemOffset, endOffset));
    }
    setPageCount(Math.ceil(isEmptyList.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, isEmptyList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % isEmptyList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isEmptyList.message !== "Not Found" && (
        <>
          <h3 className={style.list__title}>
            Repositories ({isEmptyName.public_repos})
          </h3>
          <ul className={style.list__list}>
            {currentItems &&
              currentItems.map((el) => {
                return (
                  <li key={el.html_url} className={style.list__item}>
                    <a href={el.html_url} className={style.list__link}>
                      {el.name}
                    </a>
                    <p className={style.list__text}>{el.description}</p>
                  </li>
                );
              })}
          </ul>
        </>
      )}
      <Pagination
        currentItems={currentItems}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </>
  );
};

export default UserList;
