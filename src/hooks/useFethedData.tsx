import { useState } from "react";
import { fetchTopRatedFilms } from "../api/api";

export const useFetchedData = () => {
  const [topRatedData, setTopRatedData] = useState<{}>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const getRenderedDataByPageNumber = async (pageNumber: number) => {
    setIsLoadingData(true);
    let { data } = await fetchTopRatedFilms(pageNumber ?? pageNumber);

    if (data) {
      setTopRatedData(data);
    } else {
      alert(
        "Ошибка..скорее всего сервер ушел на покой ). Попробуй включить VPN, возможно что то изменится"
      );
    }

    setIsLoadingData(false);
  };

  return { topRatedData, isLoadingData, getRenderedDataByPageNumber };
};
