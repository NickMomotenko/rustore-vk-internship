import { Title } from "@vkontakte/vkui";
import "./styled.scss";
import { List } from "../../components/List";
import { FilmCard } from "../../components/FilmCard";
import { SkeletonUI } from "../../components/Skeleton";

type RecomendationsProps = {
  data?: [];
};

export const Recomendations: React.FC<RecomendationsProps> = ({ data }) => {
  return (
    <div className="recomendations">
      <Title level="1" className="title">
        Похожие фильмы
      </Title>
      <div className="recomendations__content">
        <List classes="recomendations__list">
          {data?.length
            ? data
                ?.slice(0, 4)
                ?.map((filmData: any) => (
                  <FilmCard
                    key={filmData.id}
                    tagName="li"
                    view="rating"
                    colCounter={4}
                    {...filmData}
                  />
                ))
            : [...new Array(4)].map((_, index) => (
                <SkeletonUI key={index} colCounter={4} tagName="li" />
              ))}
        </List>
      </div>
    </div>
  );
};
