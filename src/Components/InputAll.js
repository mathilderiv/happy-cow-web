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
  //   pour trier sur la page home
  const handleSubmit = (event) => {
    event.preventDefault();

    const tab = [];
    for (let i = 0; i < restaurants.length; i++) {
      // console.log(restaurants[i].address.indexOf(inputsearch));
      if (restaurants[i].address.indexOf(inputsearch) !== -1) {
        // if (tab.length < 20) {
        tab.push(restaurants[i]);
        // } else {
        //   break;
        // }
      }
    }
    setShowingRestaurants(tab);
  };

  return (
    <div className="input-all">
      <form className="form-all" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default InputAll;
