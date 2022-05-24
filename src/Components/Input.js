import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  const [inputsearch, setInputsearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputsearch(value);
  };

  return (
    <div className="search-button">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-search"
          type="text"
          name="search"
          placeholder="Search for city, region, or zipcode"
          value={inputsearch}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
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
}
