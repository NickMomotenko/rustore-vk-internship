import { useState } from "react";

import { fetchDetailsById } from "../api/api";

import { FilmTypes } from "../types/types";

export const useFetchedActiveFilm = () => {
  const [activeFilm, setActiveFilm] = useState<FilmTypes | {}>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleChangeActiveFilm = async (id: number) => {
    setIsLoadingData(true);
    try {
      let detailsById = await fetchDetailsById(id);

      if (detailsById) {
        let updatedFilmData = {
          ...detailsById,
          genres: detailsById?.genres.map(({ name }: any) => name).join(", "),
        };

        setActiveFilm(updatedFilmData);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoadingData(false);
  };

  return { activeFilm, isLoadingData, handleChangeActiveFilm };
};
