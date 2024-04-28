import { useState, useCallback } from "react";

type Props = {
  page?: number | any;
  totalPages?: number | any;
};

export const usePaginator = ({ page, totalPages: total }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(page ?? page);
  const [siblingCount, setSiblingCount] = useState<number>(0);
  const [boundaryCount, setBoundaryCount] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(total ?? total);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const updateTotalPages = (total_pages: number) => {
    setTotalPages(total_pages);
  };

  const updatePageNumber = (pageValue: number) => {
    setCurrentPage(pageValue);
  };

  return {
    currentPage,
    siblingCount,
    boundaryCount,
    totalPages,
    disabled,
    handleChange,
    updateTotalPages,
    updatePageNumber,
  };
};
