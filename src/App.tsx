import "@vkontakte/vkui/dist/vkui.css";

import { Container } from "./components/Container";

import { TopRated } from "./containers/TopRated";
import { TopRatedProvider } from "./context/TopRatedContext";
import { Route, Routes } from "react-router-dom";
import { FilmPreview } from "./components/FilmPreview";

export const App = () => {
  return (
    <div className="app">
      <Container>
        <TopRatedProvider>
          <Routes>
            <Route path="/" element={<TopRated />} />
            <Route path="preview" element={<FilmPreview />} />
          </Routes>
        </TopRatedProvider>
      </Container>
    </div>
  );
};
