import { useState } from "react";

import { fetchRecomendationsById } from "../api/api";

import { FilmTypes } from "../types/types";

export const useFetchedRecomendations = () => {
  const [recomendationsData, setRecomendationsData] = useState<
    FilmTypes[] | []
  >([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const getRecomendationsData = async (id: number) => {
    setIsLoadingData(true);

    try {
      let recommendationsById = await fetchRecomendationsById(id);

      if (recommendationsById) {
        const { results } = recommendationsById;

        setRecomendationsData(results);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoadingData(false);
  };

  return { recomendationsData, isLoadingData, getRecomendationsData };
};
