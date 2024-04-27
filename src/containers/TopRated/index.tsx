import { Pagination, Title } from "@vkontakte/vkui";

import { usePaginator } from "../../hooks/usePaginator";

import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";

import "./styled.scss";
import { TopRatedContext } from "../../context/TopRatedContext";
import React, { useEffect } from "react";

export const TopRated = () => {
  const {
    topRatedData: { results: topRatedFilms, total_pages },
    getRenderedDataByPageNumber,
    handleChangeActiveFilm,
    isLoadingData,
  } = React.useContext(TopRatedContext);

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
        {topRatedFilms &&
          topRatedFilms?.map((filmData: any) => (
            <FilmCard
              key={filmData.id}
              tagName="li"
              view="rating"
              colCounter={4}
              onClick={handleChangeActiveFilm}
              {...filmData}
            />
          ))}
      </List>
    </div>
  );
};
