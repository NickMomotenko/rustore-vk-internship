import { useEffect, useState } from "react";

import { Pagination, Title } from "@vkontakte/vkui";

import { usePaginator } from "../../hooks/usePaginator";

import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";

import { fetchTopRatedFilms } from "../../api/api";

import "./styled.scss";

export const TopRated = () => {
  const {
    currentPage,
    siblingCount,
    boundaryCount,
    totalPages,
    disabled,
    handleChange,
  } = usePaginator();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { results } = await fetchTopRatedFilms();

        if (results) {
          setData(results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          disabled={disabled}
          onChange={handleChange}
        />
      </div>
      <List classes="top-rated__list">
        {data &&
          data?.map((filmData: any) => (
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
