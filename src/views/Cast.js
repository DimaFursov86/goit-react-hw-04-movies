import { useState, useEffect } from "react";

import * as moviesApi from "../services/moviesApi";
import s from "./Cast.module.scss";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <ul className={s.gallery}>
            {cast.cast.map(({ name, profile_path, id, character }, index) => (
              <li key={index} className={s.listItem}>
                <div className={s.castImgCont}>
                  {profile_path ? (
                    <img
                      className={s.castCard}
                      src={`https://image.tmdb.org/t/p/original${profile_path}`}
                      alt={id}
                    />
                  ) : (
                    <h3 className={s.nophoto}>No photo</h3>
                  )}
                </div>
                <div className={s.name}>
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
