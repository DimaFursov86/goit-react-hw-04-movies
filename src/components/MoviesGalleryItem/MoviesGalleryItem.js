import s from "./MoviesGalleryItem.module.scss";
// import PropTypes from "prop-types";
export default function MoviesGalleryItem({
  poster_path,
  id,
  //   openModal,
  //   largeImageURL,
}) {
  return (
    <img
      src={poster_path}
      alt={id}
      //   data-source={largeImageURL}
      //   onClick={openModal}
      className={s.photoCard}
    />
  );
}
// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   openModal: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };
