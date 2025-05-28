import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import Link from 'next/link';

interface PaginationProps {
  path: string;
  totalItems: number;
  itemsPerPage: number;
  siblingCount: number;
  currentPage: number;
}

export default function Pagination({ path, totalItems, itemsPerPage, siblingCount, currentPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let pages: (number | string)[] = [];

  // Pages numbers is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = siblingCount * 2 + 3 + 2;

  if (totalPages > totalPageNumbers) {
    const startPage = Math.max(2, currentPage - siblingCount);

    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    if (startPage > 2) {
      pages.push(1, '...');
    } else {
      pages = [1];
    }

    pages = [...pages, ...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)];

    if (endPage < totalPages - 1) {
      pages.push('...', totalPages);
    } else {
      pages = [...pages, totalPages];
    }
  } else {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return (
    <div className="join">
      <Link
        href={`${path}?page=${currentPage - 1}&limit=${itemsPerPage}`}
        className={`join-item btn ${currentPage <= 1 ? 'btn-disabled' : ''}`}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </Link>
      {pages.map((page, i) =>
        page === '...' ? (
          <button key={i} type="button" className="join-item btn btn-disabled">
            ...
          </button>
        ) : (
          <Link
            key={i}
            href={`${path}?page=${page}&limit=${itemsPerPage}`}
            className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
          >
            {page}
          </Link>
        ),
      )}
      <Link
        href={`${path}?page=${currentPage + 1}&limit=${itemsPerPage}`}
        className={`join-item btn ${currentPage >= totalPages ? 'btn-disabled' : ''}`}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
