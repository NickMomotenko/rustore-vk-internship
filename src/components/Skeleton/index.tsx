import Skeleton from "react-loading-skeleton";

import "./styled.scss";

type SkeletonUIProps = {
  colCounter?: number;
  tagName?: string;
};

export const SkeletonUI: React.FC<SkeletonUIProps> = ({
  colCounter,
  tagName,
}) => {
  const TagName: any = tagName ? tagName : "div";

  return (
    <TagName
      className="skeleton-wrapp"
      style={{ maxWidth: `calc(100% / ${colCounter} - 20px)` }}
    >
      <Skeleton className="skeleton-poster" borderRadius={15} />
      <Skeleton className="skeleton-field" borderRadius={15} />
      <Skeleton className="skeleton-field" borderRadius={15} />
    </TagName>
  );
};
