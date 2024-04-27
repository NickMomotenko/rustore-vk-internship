import { useState } from "react";
import { fetchTopRatedFilms } from "../api/api";

export const useFetchedData = () => {
  const [topRatedData, setTopRatedData] = useState<any>({});
  const [isLoadingData, setIsLoadingData] = useState(false);

  const getRenderedDataByPageNumber = async (pageNumber: number) => {
    setIsLoadingData(true);
    let data = await fetchTopRatedFilms(pageNumber ?? pageNumber);

    if (data) {
      setTopRatedData(data);
    } else console.log(2);

    setIsLoadingData(false);
  };

  return { topRatedData, isLoadingData, getRenderedDataByPageNumber };
};
