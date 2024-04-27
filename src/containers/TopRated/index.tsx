import { Pagination, Title } from "@vkontakte/vkui";

import { usePaginator } from "../../hooks/usePaginator";

import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";

import "./styled.scss";
import { useEffect } from "react";
import { SkeletonUI } from "../../components/Skeleton";
import { useFetchedData } from "../../hooks/useFethedData";

export const TopRated = () => {
  const {
    topRatedData: { results: topRatedFilms, total_pages },
    getRenderedDataByPageNumber,
    isLoadingData,
  } = useFetchedData();

  const {
    currentPage,
    siblingCount,
    boundaryCount,
    totalPages,
    handleChange,
    updateTotalPages,
    updatePageNumber,
  } = usePaginator({});

  useEffect(() => {
    getRenderedDataByPageNumber(currentPage);
    updatePageNumber(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (total_pages) {
      updateTotalPages(total_pages);
    }
  }, [total_pages]);

  return (
    <div className="top-rated">
      <Title level="1" className="title">
        Лучшие фильмы
      </Title>
      <div className="top-rated__paginator">
        <Pagination
          currentPage={currentPage}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          totalPages={totalPages}
          disabled={isLoadingData}
          onChange={handleChange}
        />
      </div>
      <List classes="top-rated__list">
        {!topRatedFilms || isLoadingData
          ? [...new Array(4)].map((_, index) => (
              <SkeletonUI key={index} colCounter={4} tagName="li" />
            ))
          : topRatedFilms
              ?.slice(0, 4)
              ?.map((filmData: any) => (
                <FilmCard
                  key={filmData.id}
                  tagName="li"
                  view="rating"
                  colCounter={4}
                  {...filmData}
                />
              ))}
      </List>
    </div>
  );
};
