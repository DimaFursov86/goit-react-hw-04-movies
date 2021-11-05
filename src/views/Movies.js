import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import s from "../views/Movies.module.scss";
import Button from "../components/Button/Button";
import * as moviesApi from "../services/moviesApi";
import { Link, useRouteMatch } from "react-router-dom";
import MoviesGalleryItem from "../components/MoviesGalleryItem/MoviesGalleryItem";
import notFound from "../notFound.jpg";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function App() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    moviesApi
      .fetchQuery(movieName, page)
      .then((movie) => {
        const movieArr = movie.results.map(({ id, poster_path, title }) => {
          return {
            id,
            poster_path,
            title,
          };
        });
        setMovies((prevState) => [...prevState, ...movieArr]);
        setStatus(Status.RESOLVED);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieName, page]);

  const onPageClick = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleFormSubmit = (movieName) => {
    setMovieName(movieName);
    setMovies([]);
    setPage(1);
  };

  return (
    <div className={s.box}>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length !== 0 && (
        <ul className={s.gallery}>
          {movies.map((movie, index) => (
            <li key={index} className={s.listItem}>
              <Link to={`${url}/${movie.id}`} className={s.link}>
                <MoviesGalleryItem
                  poster_path={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : notFound
                  }
                  id={movie.id}
                />
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === Status.REJECTED && <h2>{error.message}</h2>}
      {status === Status.RESOLVED && movies.length !== 0 && (
        <Button onClick={onPageClick} />
      )}
    </div>
  );
}
