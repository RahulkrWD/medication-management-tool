import React from "react";
import { Pagination } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MedicationPagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </Pagination.Prev>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </Pagination.Next>
    </Pagination>
  );
};

export default MedicationPagination;
