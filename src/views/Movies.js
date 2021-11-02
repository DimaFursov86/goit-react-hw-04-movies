import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import s from "../views/Movies.module.scss";
export default function App() {
  //   const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");
  //   const [error, setError] = useState(null);
  //   const [status, setStatus] = useState(Status.IDLE);
  //   const [page, setPage] = useState(1);
  //   const [largeImg, setLargeImg] = useState("");
  //   const [showModal, setshowModal] = useState(false);

  //   useEffect(() => {
  //     if (!imageName) {
  //       return;
  //     }
  //     setStatus(Status.PENDING);

  //     serviceAPI
  //       .fetchImages(imageName, page)
  //       .then((images) => {
  //         const imageArr = images.hits.map(
  //           ({ id, webformatURL, largeImageURL }) => {
  //             return {
  //               id,
  //               webformatURL,
  //               largeImageURL,
  //             };
  //           }
  //         );
  //         setImages((prevState) => [...prevState, ...imageArr]);
  //         setStatus(Status.RESOLVED);
  //         window.scrollTo({
  //           top: document.documentElement.scrollHeight,
  //           behavior: "smooth",
  //         });
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setStatus(Status.REJECTED);
  //       });
  //   }, [imageName, page]);

  const handleFormSubmit = (imageName) => {
    setImageName(imageName);
  };

  return (
    <div className={s.box}>
      <Searchbar onSubmit={handleFormSubmit} />
    </div>
  );
}
