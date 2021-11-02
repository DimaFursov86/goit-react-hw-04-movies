import { useState } from "react";
import s from "./Searchbar.module.scss";
// import { ImSearch } from "react-icons/im";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState("");

  const handleNameChange = (event) => {
    setImageName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (imageName.trim() === "") {
      alert("Enter text.");
      return;
    }

    onSubmit(imageName);
    setImageName("");
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className={s.searchFormInput}
          type="text"
          name="imageName"
          value={imageName}
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
