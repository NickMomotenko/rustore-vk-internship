import { useContext, useEffect } from "react";
import "./styled.scss";
import { TopRatedContext } from "../../context/TopRatedContext";
import { formatDate, normalizeRatingValue } from "../../helpers/helpers";
import { FilmTypes } from "../../types/types";
import { Recomendations } from "../../containers/Recomendations";
import { SkeletonUI } from "../Skeleton/SkeletonPreview";
import { useParams } from "react-router-dom";

export const FilmPreview = () => {
  const { activeFilm, handleChangeActiveFilm, isLoadingActiveFilmData } =
    useContext(TopRatedContext);

  const {
    title,
    overview,
    vote_average,
    release_date,
    popularity,
    runtime,
    genres,
    backdrop_path,
  }: FilmTypes | any = activeFilm;

  const { id } = useParams();

  useEffect(() => {
    handleChangeActiveFilm(Number(id));
  }, [id]);

  return (
    <div className="preview">
      <div className="preview__wrapp">
        <div className="preview__content">
          {Object.keys(activeFilm).length === 0 || isLoadingActiveFilmData ? (
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
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="preview__recomendations">
        <Recomendations />
      </div>
    </div>
  );
};
