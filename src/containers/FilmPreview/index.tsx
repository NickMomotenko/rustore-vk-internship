import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Recomendations } from "../Recomendations";

import { SkeletonUI } from "../../components/Skeleton/SkeletonPreview";

import { formatDate, normalizeRatingValue } from "../../helpers/helpers";

import { FilmTypes } from "../../types/types";

import { useFetchedActiveFilm } from "../../hooks/useFetchedActiveFilm";
import { useFetchedRecomendations } from "../../hooks/useFetchedRecomendations";

import "./styled.scss";

export const FilmPreview = () => {
  const { activeFilm, isLoadingData, handleChangeActiveFilm } =
    useFetchedActiveFilm();

  const {
    title,
    overview,
    vote_average,
    release_date,
    popularity,
    runtime,
    genres,
    backdrop_path,
    recomendations,
  }: FilmTypes | any = activeFilm;

  const { id } = useParams();

  useEffect(() => {
    handleChangeActiveFilm(Number(id));
  }, [id]);

  return (
    <div className="preview">
      <div className="preview__wrapp">
        <div className="preview__content">
          {Object.keys(activeFilm).length === 0 || isLoadingData ? (
            <SkeletonUI />
          ) : (
            <>
              <div className="preview__col">
                <div className="preview__head">
                  <div className="preview__rating">
                    {normalizeRatingValue(vote_average)}
                  </div>
                  <div className="preview__title">{title}</div>
                </div>
                <div className="preview__description">{overview}</div>
                <div className="preview__info">
                  <div className="preview__info-row">
                    <div className="preview__info-subtitle">Длительность:</div>
                    <div className="preview__info-value">{runtime} мин</div>
                  </div>
                  <div className="preview__info-row">
                    <div className="preview__info-subtitle">Популярность:</div>
                    <div className="preview__info-value">{popularity}</div>
                  </div>
                  <div className="preview__info-row">
                    <div className="preview__info-subtitle">Дата выхода:</div>
                    <div className="preview__info-value">
                      {formatDate(release_date)}
                    </div>
                  </div>
                  <div className="preview__info-row">
                    <div className="preview__info-subtitle">Жанр:</div>
                    <div className="preview__info-value">{genres}</div>
                  </div>
                </div>
              </div>
              <div className="preview__col preview__col--poster">
                <div className="preview__poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={`Poster - ${title}`}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="preview__recomendations">
        <Recomendations isLoading={isLoadingData} data={recomendations} />
      </div>
    </div>
  );
};
