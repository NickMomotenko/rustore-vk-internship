import React from "react";
import { useState } from "react";

export const usePaginator = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(0);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [totalPages, setTotalPages] = useState(123);
  const [disabled, setDisabled] = useState(false);

  const handleChange = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    currentPage,
    siblingCount,
    boundaryCount,
    totalPages,
    disabled,
    handleChange,
  };
};
