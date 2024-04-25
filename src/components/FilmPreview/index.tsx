import { useContext } from "react";
import "./styled.scss";
import { TopRatedContext } from "../../context/TopRatedContext";
import { formatDate, normalizeRatingValue } from "../../helpers/helpers";
import { FilmTypes } from "../../types/types";

export const FilmPreview = () => {
  const { activeFilm } = useContext(TopRatedContext);

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

  return (
    <div className="preview">
      <div className="preview__content">
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
      </div>
    </div>
  );
};
