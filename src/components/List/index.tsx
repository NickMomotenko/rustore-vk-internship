import "./styled.scss";

type ListProps = {
  children: React.ReactNode;
  classes?: string;
};

export const List: React.FC<ListProps> = ({ children, classes }) => {
  return <ul className={`list ${classes}`}>{children}</ul>;
};
