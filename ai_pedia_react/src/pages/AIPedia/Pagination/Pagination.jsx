import React from 'react';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {

  const pages = Array.from({length: lastPage}, (_, i) => i + 1); // creates an array with pages numbers

  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Prev
      </button>

      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= lastPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
