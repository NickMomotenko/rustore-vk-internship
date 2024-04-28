import { Navigate, Route, Routes } from "react-router-dom";

import { Container } from "./components/Container";

import { TopRated } from "./containers/TopRated";
import { FilmPreview } from "./containers/FilmPreview";

import "@vkontakte/vkui/dist/vkui.css";

export const App = () => {
  return (
    <div className="app">
      <Container>
        <Routes>
          <Route path="/" element={<TopRated />} />
          <Route path="/preview/:id" element={<FilmPreview />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </div>
  );
};
