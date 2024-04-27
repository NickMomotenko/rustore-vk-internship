import { ReactNode } from "react";
import { FilmTypes } from "../types/types";

export interface TopRatedContextProps {
  topRatedData: {
    results: FilmTypes[] | [];
    page: number;
    total_pages: number;
    total_results: number;
  };
  activeFilm: FilmTypes | {};
  isLoadingData: boolean;
  getRenderedDataByPageNumber: (pageNumber?: number) => void;
  handleChangeActiveFilm: (id: number) => void;
}

export interface TopRatedProviderProps {
  children: ReactNode;
}
