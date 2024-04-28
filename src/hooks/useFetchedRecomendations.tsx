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

    let recommendationsById = await fetchRecomendationsById(id);

    if (recommendationsById && recommendationsById?.results) {
      const { results } = recommendationsById;

      setRecomendationsData(results);
    } else {
      alert(
        "Не могу загрузить рекомендации. Попробуй включить VPN, возможно что то изменится"
      );
    }

    setIsLoadingData(false);
  };

  return { recomendationsData, isLoadingData, getRecomendationsData };
};
