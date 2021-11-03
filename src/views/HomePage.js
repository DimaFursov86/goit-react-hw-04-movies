import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as moviesApi from "../services/moviesApi";
import MoviesGalleryItem from "../components/MoviesGalleryItem/MoviesGalleryItem";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrending().then(setMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul className={s.gallery}>
          {movies.results.map((movie) => (
            <li key={movie.id} className={s.listItem}>
              <Link to={`${url}movies/${movie.id}`} className={s.link}>
                <MoviesGalleryItem
                  poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  id={movie.id}
                />
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
