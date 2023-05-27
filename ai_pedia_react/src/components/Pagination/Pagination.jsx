import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 4;
    const ellipsis = '...';

    if (lastPage <= maxDisplayedPages) {
      for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? 'active' : ''}>
            <button onClick={() => onPageChange(i)}>{i}</button>
          </li>
        );
      }
    } else {
      const leftEllipsis = currentPage > 2 ? <li>{ellipsis}</li> : null;
      const rightEllipsis =
        currentPage < lastPage - 1 ? <li>{ellipsis}</li> : null;

      let startPage = Math.max(1, currentPage - 1);
      let endPage = Math.min(currentPage + 1, lastPage);

      if (currentPage === 1) {
        endPage = Math.min(maxDisplayedPages, lastPage);
      } else if (currentPage === lastPage) {
        startPage = Math.max(1, lastPage - maxDisplayedPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? 'active' : ''}>
            <button onClick={() => onPageChange(i)}>{i}</button>
          </li>
        );
      }

      if (startPage > 1) {
        pageNumbers.unshift(leftEllipsis);
      }

      if (endPage < lastPage) {
        pageNumbers.push(rightEllipsis);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === lastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
