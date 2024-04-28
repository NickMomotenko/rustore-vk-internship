import { useNavigate } from "react-router-dom";

import { formatDate, normalizeRatingValue } from "../../helpers/helpers";

import { FilmTypes } from "../../types/types";

import "react-loading-skeleton/dist/skeleton.css";
import "./styled.scss";

type FilmCardProps = FilmTypes & {
  colCounter: number;
  tagName?: string;
  view?: "regular" | "rating";
};

export const FilmCard: React.FC<FilmCardProps> = ({
  title,
  poster_path,
  vote_average,
  release_date,
  colCounter,
  tagName,
  view = "regular",
  id,
}) => {
  const TagName: any = tagName ? tagName : "div";
  const isRatingView = view === "rating";

  const navigate = useNavigate();

  return (
    <TagName
      className="card"
      style={{ maxWidth: `calc(100% / ${colCounter} - 20px)` }}
      onClick={() => navigate(`/preview/${id}`)}
    >
      <div className="card__image">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`Poster - ${title}`}
          className="card__image-src"
          loading="lazy"
        />
      </div>
      <div className="card__info">
        {isRatingView && (
          <div className="card__rating">
            {normalizeRatingValue(vote_average)}
          </div>
        )}
        <div className="card__info-content">
          <div className="card__info-title">{title}</div>
          {isRatingView && (
            <div className="card__info-date">{formatDate(release_date)}</div>
          )}
        </div>
      </div>
    </TagName>
  );
};
