import { useState, useEffect } from "react";
import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";
import * as moviesApi from "../services/moviesApi";
import Cast from "./Cast";
import Reviews from "./Reviews";
import s from "../views/MovieDetailsPage.module.scss";

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // console.log(path)
  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div>
            {" "}
            <h2>{movie.title}</h2>
            <div className={s.movieDetailCont}>
              <div className={s.ImgContainer}>
                {" "}
                <img
                  className={s.imgItem}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.id}
                />
              </div>

              <div className={s.detailsText}>
                {" "}
                <p>Genres: </p>
                <ul>
                  {movie.genres.map(({ name }, index) => (
                    <li className={s.genre} key={index}>
                      {name}
                    </li>
                  ))}
                </ul>
                {
                  <p>
                    Vote average:
                    <span className={s.vote}> {movie.vote_average}</span>
                  </p>
                }
                {
                  <p>
                    Votes:<span className={s.vote}> {movie.vote_count}</span>
                  </p>
                }
                {movie.release_date && (
                  <p>
                    Release date:
                    <span className={s.releaseDate}> {movie.release_date}</span>
                  </p>
                )}
                {movie.overview && (
                  <div>
                    Overview:<p className={s.overview}> {movie.overview}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
          <hr />

          <Route path={`${path}/cast`}>
            {movie && <Cast movieId={movieId} />}
          </Route>
          <Route path={`${path}/reviews`}>
            {movie && <Reviews movieId={movieId} />}
          </Route>
        </>
      )}
    </>
  );
}
