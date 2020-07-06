import React from "react";

const Search = (props) => {
  return (
    <div className="search-container">
      <p>Trouvez un artisan qualifié</p>
      <p>près de chez vous</p>
      <div className="search-box">
        <h7>Saisissez votre projet</h7>
        <input
          type="text"
          value={props.cc}
          placeholder="Trouver un métier"
          className="search-input"
        ></input>
      </div>
    </div>
  );
};

export default Search;
