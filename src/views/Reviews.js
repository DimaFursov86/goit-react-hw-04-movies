import { useState, useEffect } from "react";

import * as moviesApi from "../services/moviesApi";
import s from "./Reviews.module.scss";

export default function Cast({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <div>
          <ul className={s.gallery}>
            {reviews.results.map(({ author, content }, index) => (
              <li key={index} className={s.listItem}>
                <div>
                  <h2>Author: {author}</h2>
                  <p>Review: {content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
