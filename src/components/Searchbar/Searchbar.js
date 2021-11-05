import { useState } from "react";
import s from "./Searchbar.module.scss";

import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [movieName, setImageName] = useState("");

  const handleNameChange = (event) => {
    setImageName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (movieName.trim() === "") {
      alert("Enter text.");
      return;
    }

    onSubmit(movieName);
    setImageName("");
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className={s.searchFormInput}
          type="text"
          name="imageName"
          value={movieName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Movie Search"
        />
        <button type="submit" className={s.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
