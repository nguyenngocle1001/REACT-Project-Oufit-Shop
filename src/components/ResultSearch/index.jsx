import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

ResultSearch.propTypes = {
  searchTerm: PropTypes.string,
  onRemoveSearch: PropTypes.func,
};

function ResultSearch(props) {
  const { searchTerm, onRemoveSearch } = props;
  return (
    <div className="result-search">
      <h3 className="result-search__heading">Kết quả tìm kiếm cho từ khóa: </h3>
      <div className="result-search__item">{searchTerm}</div>

      <button
        className="result-search__btn"
        onClick={() => onRemoveSearch(null)}
      >
        Dọn dẹp
      </button>
    </div>
  );
}

export default ResultSearch;
