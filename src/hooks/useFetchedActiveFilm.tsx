import { useState } from "react";

import { fetchDetailsById } from "../api/api";

import { FilmTypes } from "../types/types";

export const useFetchedActiveFilm = () => {
  const [activeFilm, setActiveFilm] = useState<FilmTypes | {}>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleChangeActiveFilm = async (id: number) => {
    setIsLoadingData(true);

    let detailsById = await fetchDetailsById(id);

    if (Object.keys(detailsById).length !== 0) {
      let updatedFilmData = {
        ...detailsById,
        genres: detailsById?.genres.map(({ name }: any) => name).join(", "),
      };

      setActiveFilm(updatedFilmData);
    } else {
      alert(
        "Не могу загрузить фильм. Попробуй включить VPN, возможно что то изменится"
      );
    }

    setIsLoadingData(false);
  };

  return { activeFilm, isLoadingData, handleChangeActiveFilm };
};
