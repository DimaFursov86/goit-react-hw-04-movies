import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../services/moviesApi";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.id}
          />
          <h2>{movie.title}</h2>
          <p>Genres: </p>
          <ul>
            {movie.genres.map(({ name }, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>

          {
            <p>
              Vote average:<span> {movie.vote_average}</span>
            </p>
          }
          {
            <p>
              Votes:<span> {movie.vote_count}</span>
            </p>
          }
          {movie.release_date && <p>Release date: {movie.release_date}</p>}
        </>
      )}
    </>
  );
}
