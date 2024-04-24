import "@vkontakte/vkui/dist/vkui.css";

import { Container } from "./components/Container";

import { TopRated } from "./containers/TopRated";
import { FilmPreview } from "./components/FilmPreview";

export const App = () => {
  return (
    <div className="app">
      <Container>
        <TopRated />
        {/* <FilmPreview /> */}
      </Container>
    </div>
  );
};
