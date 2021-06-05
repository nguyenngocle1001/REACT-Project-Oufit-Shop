import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import "./style.scss";

Sort.propTypes = {
  onSortChange: PropTypes.func,
};

Sort.defaultProps = {
  onSortChange: null,
};

function Sort(props) {
  const { onSortChange } = props;
  const sortRef = useRef(null);

  const [valueActive, setValueActive] = useState({ label: null, sortBy: null });
  const priceOptions = [
    { id: 1, value: "Giá: Thấp đến Cao", keyword: "priceAsc" },
    { id: 2, value: "Giá: Cao đến Thấp", keyword: "priceDesc" },
  ];

  const handleSortItemClick = (sortBy, label) => {
    if (sortRef.current) sortRef.current = null;
    sortRef.current = { sortBy: sortBy, label: label };
    setValueActive(sortRef.current);

    if (onSortChange) onSortChange(sortRef.current);
  };

  return (
    <div className="sort">
      <p className="sort__name">Sắp xếp theo</p>
      <ul className="sort__list">
        <li
          className={!valueActive.sortBy ? "sort__item active" : "sort__item"}
        >
          <button
            className="sort__btn"
            onClick={() => handleSortItemClick(null)}
          >
            Mặc định
          </button>
        </li>

        <li className={valueActive.sortBy ? "sort__item active" : "sort__item"}>
          <div className="sort__price">
            {!valueActive.label ? "Giá" : valueActive.label}
            <MdArrowDropDown className="sort__price__icon" />
            <ul className="sort__price__list">
              {priceOptions.map((option) => {
                return (
                  <li
                    className={
                      option.keyword === valueActive.sortBy
                        ? "sort__price__item active"
                        : "sort__price__item"
                    }
                    onClick={() => {
                      handleSortItemClick(option.keyword, option.value);
                    }}
                    key={option.id}
                  >
                    {option.value}
                    <AiOutlineCheck className="sort__price__item__icon" />
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sort;
