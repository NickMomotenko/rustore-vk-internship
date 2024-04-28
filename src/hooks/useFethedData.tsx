import { useState } from "react";
import { fetchTopRatedFilms } from "../api/api";
import { FetchedDataTypes } from "../types/types";
import { useLocalStorage } from "./useLocaleStorage";

export const useFetchedData = () => {
  const [topRatedData, setTopRatedData] = useState<FetchedDataTypes>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const { data: topRatedStorage, setData } = useLocalStorage("topFilms", {});

  const getRenderedDataByPageNumber = async (pageNumber: number) => {
    setIsLoadingData(true);

    if (topRatedStorage && topRatedStorage?.page === pageNumber) {
      setTopRatedData(topRatedStorage);
    } else {
      let data = await fetchTopRatedFilms(pageNumber ?? pageNumber);

      if (data && data?.results) {
        setData(data);
        setTopRatedData(data);
      } else {
        alert(
          "Ошибка..скорее всего сервер ушел на покой ). Попробуй включить VPN, возможно что то изменится"
        );
      }
    }

    setIsLoadingData(false);
  };

  return { topRatedData, isLoadingData, getRenderedDataByPageNumber };
};
