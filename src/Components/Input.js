import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
  inputsearch,
  setInputsearch,
  restaurants,
  setShowingRestaurants,
}) => {
  return (
    <div className="search-button">
      <form className="form">
        <input
          className="input-search"
          type="text"
          name="search"
          placeholder="Search for city, region, or zipcode"
          value={inputsearch}
          onChange={(event) => {
            setInputsearch(event.target.value);
          }}
        />
        <Link to="/research" state={{ inputsearch }}>
          <button type="submit" className="submit-button">
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
              }}
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Input;
