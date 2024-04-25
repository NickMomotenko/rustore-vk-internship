import { ReactNode } from "react";
import { FilmTypes } from "../types/types";

export interface TopRatedContextProps {
  topRatedData: FilmTypes[];
  activeFilm: FilmTypes | {};
  isLoadingData: boolean;
  getRenderedDataByPageNumber: (pageNumber: number) => void;
  handleChangeActiveFilm: (id: number) => void;
}

export interface TopRatedProviderProps {
  children: ReactNode;
}
