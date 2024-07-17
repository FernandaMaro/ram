import React from "react";

const Paginacion = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <body>
    <footer className="container paginacion" >
    <div>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </footer>
    </body>
  );
};

export default Paginacion;
