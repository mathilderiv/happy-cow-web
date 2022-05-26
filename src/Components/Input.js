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
  //pour trier
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

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setInputsearch(value);
  // };

  return (
    <div className="search-button">
      <form className="form" onSubmit={handleSubmit}>
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
        <Link
          to="/research"
          inputsearch={inputsearch}
          setInputsearch={setInputsearch}
          restaurants={restaurants}
          setShowingRestaurants={setShowingRestaurants}
        >
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
