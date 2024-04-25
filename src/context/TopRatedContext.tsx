import React, { createContext, useState } from "react";

import { TopRatedContextProps, TopRatedProviderProps } from "./types";

import { fetchDetailsById, fetchRecomendationsById, fetchTopRatedFilms } from "../api/api";
import { FilmTypes } from "../types/types";

export const TopRatedContext = createContext<TopRatedContextProps>({
  topRatedData: [],
  activeFilm: {},
  isLoadingData: false,
  getRenderedDataByPageNumber: () => {},
  handleChangeActiveFilm: () => {},
});

export const TopRatedProvider: React.FC<TopRatedProviderProps> = ({
  children,
}) => {
  const [topRatedData, setTopRatedData] = useState<FilmTypes[]>([]);
  const [topRatedRenderedData, setTopRatedRenderedData] = useState<FilmTypes[]>(
    []
  );

  const [activeFilm, setActiveFilm] = useState<FilmTypes | {}>({});

  const [isLoadingData, setIsLoadingData] = useState(false);

  const getRenderedDataByPageNumber = async (pageNumber: number) => {
    setIsLoadingData(true);
    let { results } = await fetchTopRatedFilms(pageNumber ?? pageNumber);

    if (results) {
      setTopRatedData(results);
    } else console.log(2);

    setIsLoadingData(false);
  };

  const handleChangeActiveFilm = async (id: number) => {
    const searchableFilm: any = topRatedData.find((film) => film.id === id);

    if (searchableFilm) {
      let detailsById = await fetchDetailsById(id);
      let recommendationsById = await fetchRecomendationsById(id);

      if (detailsById) {
        const { runtime, genres } = detailsById;

        let updatedFilmData = {
          ...searchableFilm,
          runtime,
          genres: genres.map(({ name }: any) => name).join(","),
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
