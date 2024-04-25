import { Pagination, Title } from "@vkontakte/vkui";

import { usePaginator } from "../../hooks/usePaginator";

import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";

import "./styled.scss";
import { TopRatedContext } from "../../context/TopRatedContext";
import React, { useEffect } from "react";

export const TopRated = () => {
  const { currentPage, siblingCount, boundaryCount, totalPages, handleChange } =
    usePaginator();

  const {
    topRatedData,
    getRenderedDataByPageNumber,
    handleChangeActiveFilm,
    isLoadingData,
  } = React.useContext(TopRatedContext);

  useEffect(() => {
    getRenderedDataByPageNumber(currentPage);
  }, [currentPage]);

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
        {topRatedData &&
          topRatedData?.map((filmData: any) => (
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
