import { Title } from "@vkontakte/vkui";

import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";
import { SkeletonUI } from "../../components/Skeleton";

import "./styled.scss";

type RecomendationsProps = {
  data?: [];
  isLoading?: boolean;
};

export const Recomendations: React.FC<RecomendationsProps> = ({
  data,
  isLoading,
}) => {
  return (
    <div className="recomendations">
      <Title level="1" className="title">
        Похожие фильмы
      </Title>
      <div className="recomendations__content">
        <List classes="recomendations__list">
          {!data || isLoading
            ? [...new Array(4)].map((_, index) => (
                <SkeletonUI key={index} colCounter={4} tagName="li" />
              ))
            : data
                ?.slice(0, 4)
                ?.map((filmData: any) => (
                  <FilmCard
                    key={filmData.id}
                    tagName="li"
                    colCounter={4}
                    {...filmData}
                  />
                ))}
        </List>
      </div>
    </div>
  );
};
