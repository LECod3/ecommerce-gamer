const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    pages.push(1);

    let rangeStart = Math.max(2, currentPage - delta);
    let rangeEnd = Math.min(totalPages - 1, currentPage + delta);
    if (currentPage <= 3) {
      rangeEnd = Math.min(4, totalPages - 1);
    }
    if (currentPage >= totalPages - 2) {
      rangeStart = Math.max(2, totalPages - 3);
    }

    if (rangeStart > 2) {
      pages.push("...");
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    if (rangeEnd < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="mt-4">
      <ul className="pagination pagination-sm justify-content-center flex-wrap">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Anterior"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
        </li>

        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
          }

          return (
            <li
              key={page}
              className={`page-item ${currentPage === page && "active"}`}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Siguiente"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
