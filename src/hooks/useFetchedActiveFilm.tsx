import { useState } from "react";

import { fetchDetailsById, fetchRecomendationsById } from "../api/api";

import { FilmTypes } from "../types/types";
import { useLocalStorage } from "./useLocaleStorage";
import { useFetchedRecomendations } from "./useFetchedRecomendations";

export const useFetchedActiveFilm = () => {
  const [activeFilm, setActiveFilm] = useState<FilmTypes | {}>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const { data: localStorageActiveFilm, setData } = useLocalStorage(
    "activeFilm",
    {}
  );

  const { getRecomendationsData } = useFetchedRecomendations();

  const handleChangeActiveFilm = async (id: number) => {
    setIsLoadingData(true);

    if (
      Object.keys(localStorageActiveFilm).length !== 0 &&
      localStorageActiveFilm?.id === id
    ) {
      setActiveFilm(localStorageActiveFilm);
    } else {
      let detailsById = await fetchDetailsById(id);
      let recomendationsById = await getRecomendationsData(id);

      if (Object.keys(detailsById).length !== 0) {
        let updatedFilmData = {
          ...detailsById,
          genres: detailsById?.genres.map(({ name }: any) => name).join(", "),
          recomendations: recomendationsById,
        };

        setActiveFilm(updatedFilmData);
        setData(updatedFilmData);
      } else {
        alert(
          "Не могу загрузить фильм. Попробуй включить VPN, возможно что то изменится"
        );
      }
    }

    setIsLoadingData(false);
  };

  return { activeFilm, isLoadingData, handleChangeActiveFilm };
};
