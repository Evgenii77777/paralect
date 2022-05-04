import style from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={style.item}
        pageLinkClassName="page-link"
        previousClassName={style.next}
        previousLinkClassName="page-link"
        nextClassName={style.next}
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName={style.next}
        breakLinkClassName="page-link"
        containerClassName={style.list}
        activeClassName={style.active}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
