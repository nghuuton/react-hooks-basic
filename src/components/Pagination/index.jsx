import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "./Pagination.scss";
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  const pages = _.range(1, totalPages + 1);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button
        disabled={_page === 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>
      <ul className="pages">
        {pages.map((page) => (
          <li key={page} onClick={() => handlePageChange(page)}>
            {page}
          </li>
        ))}
      </ul>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Prev
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;
