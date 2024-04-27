import React, { createContext, useState } from "react";

import { TopRatedContextProps, TopRatedProviderProps } from "./types";

import {
  fetchDetailsById,
  fetchRecomendationsById,
  fetchTopRatedFilms,
} from "../api/api";
import { FilmTypes } from "../types/types";

export const TopRatedContext = createContext<TopRatedContextProps>({
  topRatedData: {
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0,
  },
  activeFilm: {},
  isLoadingData: false,
  getRenderedDataByPageNumber: () => {},
  handleChangeActiveFilm: () => {},
});

export const TopRatedProvider: React.FC<TopRatedProviderProps> = ({
  children,
}) => {
  const [topRatedData, setTopRatedData] = useState<{}>({});

  const [activeFilm, setActiveFilm] = useState<FilmTypes | {}>({});

  const [isLoadingData, setIsLoadingData] = useState(false);

  const getRenderedDataByPageNumber = async (pageNumber: number) => {
    setIsLoadingData(true);
    let data = await fetchTopRatedFilms(pageNumber ?? pageNumber);

    if (data) {
      setTopRatedData(data);
    } else console.log(2);

    setIsLoadingData(false);
  };

  const handleChangeActiveFilm = async (id: number) => {
    const searchableFilm = topRatedData?.results.find(
      (film: FilmTypes) => film.id === id
    );

    if (searchableFilm) {
      let detailsById = await fetchDetailsById(id);
      let recommendationsById = await fetchRecomendationsById(id);

      if (detailsById && recommendationsById) {
        const { runtime, genres } = detailsById;
        const { results } = recommendationsById;

        let updatedFilmData = {
          ...searchableFilm,
          runtime,
          genres: genres.map(({ name }: any) => name).join(", "),
          recommendations: results,
        };

        setActiveFilm(updatedFilmData);
      } else console.log(2);
    } else return;
  };

  return (
    <TopRatedContext.Provider
      value={{
        topRatedData,
        activeFilm,
        isLoadingData,
        getRenderedDataByPageNumber,
        handleChangeActiveFilm,
      }}
    >
      {children}
    </TopRatedContext.Provider>
  );
};
