import { useState } from 'react';

const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));

    setCurrentPage(pageNumber);
  };

  return [{ currentPage, totalPages }, nextPage, prevPage, goToPage];
};

export default usePagination;
