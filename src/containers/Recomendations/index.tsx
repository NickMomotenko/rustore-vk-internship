import { Title } from "@vkontakte/vkui";
import "./styled.scss";
import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";
import { useContext } from "react";
import { TopRatedContext } from "../../context/TopRatedContext";
import { FilmTypes } from "../../types/types";

export const Recomendations = () => {
  const { activeFilm } = useContext(TopRatedContext);
  const { recommendations }: FilmTypes | any = activeFilm;

  return (
    <div className="recomendations">
      <Title level="1" className="title">
        Похожие фильмы
      </Title>
      <div className="recomendations__content">
        <List classes="recomendations__list">
          {recommendations &&
            recommendations
              .slice(0, 4)
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
    </div>
  );
};
