import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);

const Movies = lazy(() =>
  import("./views/Movies" /* webpackChunkName: "Movies" */)
);

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Container>
  );
}
