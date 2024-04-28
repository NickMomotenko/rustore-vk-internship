import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  page?: number | any;
  totalPages?: number | any;
};

export const usePaginator = ({ page, totalPages: total }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(page ? page : 1);
  const [siblingCount, setSiblingCount] = useState<number>(0);
  const [boundaryCount, setBoundaryCount] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(total ?? total);
  const [disabled, setDisabled] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const updateTotalPages = (total_pages: number) => {
    setTotalPages(total_pages);
  };

  const updatePageUrl = (pageValue: number) => {
    navigate(`/${pageValue}`);
  };
  return {
    currentPage,
    siblingCount,
    boundaryCount,
    totalPages,
    disabled,
    handleChange,
    updateTotalPages,
    updatePageUrl,
  };
};
