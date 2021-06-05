import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdFirstPage, MdLastPage, MdNavigateNext } from "react-icons/md";
import "./style.scss";

Pagination.propTypes = {
  totalRow: PropTypes.number,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalRow: 0,
  pagination: {},
  onPageChange: null,
};

function Pagination(props) {
  const { totalRow, pagination, onPageChange } = props;
  const { page, limit } = pagination;
  const totalPage = Math.ceil(totalRow / limit);

  const [pages, setPages] = useState([]);

  const handPageClick = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  useEffect(() => {
    const result = [];

    if (totalPage <= 5) {
      for (let i = 0; i < totalPage; i++)
        result.push(
          <li className="pagination__item" key={i}>
            <button
              className={
                page === i + 1 ? "pagination__btn active" : "pagination__btn"
              }
              disabled={page === i + 1}
              onClick={() => handPageClick(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        );
    }

    setPages(result);
  }, [totalPage, page]);

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <button
          className="pagination__btn"
          disabled={page === 1}
          onClick={() => handPageClick(page - 1)}
        >
          <AiOutlineLeft className="pagination__icon" />
        </button>
      </li>

      {pages.map((renderItem) => {
        return renderItem;
      })}
      <li className="pagination__item">
        <button
          className="pagination__btn"
          disabled={page === totalPage}
          onClick={() => handPageClick(page + 1)}
        >
          <AiOutlineRight className="pagination__icon" />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
