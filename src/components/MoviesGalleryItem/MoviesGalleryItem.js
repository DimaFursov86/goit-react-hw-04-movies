import s from "./MoviesGalleryItem.module.scss";

import PropTypes from "prop-types";
export default function MoviesGalleryItem({ poster_path, id }) {
  return <img src={poster_path} alt={id} className={s.photoCard} />;
}
MoviesGalleryItem.propTypes = {
  poster_path: PropTypes.node,
  id: PropTypes.number.isRequired,
};
