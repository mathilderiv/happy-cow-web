import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputAll = ({
  inputsearch,
  setInputsearch,
  restaurants,
  setShowingRestaurants,
}) => {
  return (
    <div className="input-all">
      <form className="form-all">
        <input
          className="input-search-all"
          type="text"
          name="search"
          placeholder="Search for city, region, or zipcode"
          value={inputsearch}
          onChange={(event) => {
            setInputsearch(event.target.value);
          }}
        />

        <button type="submit" className="onsubmit-button">
          <FontAwesomeIcon
            style={{
              fontSize: "30px",
            }}
            icon="fa-solid fa-magnifying-glass"
          />
        </button>
      </form>
      {/* <div>{tab}</div> */}
    </div>
  );
};

export default InputAll;
