const Pagination = ({ page, pageSize, totalProperties, onPageChange }) => {
  const totalPages = Math.ceil(totalProperties / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <section className="container mx-auto my-8 flex items-center justify-center">
      <button
        className="mr-2 rounded border border-gray-300 px-2 py-1"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {page} of {totalPages}
      </span>
      <button
        className="ml-2 rounded border border-gray-300 px-2 py-1"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
