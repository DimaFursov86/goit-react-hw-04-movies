import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import "./App.css";
import HomePage from "./views/HomePage";
import { Switch, Route } from "react-router-dom";
import Movies from "./views/Movies";
import MovieDetailsPage from "./views/MovieDetailsPage";

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}
