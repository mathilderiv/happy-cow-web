import mainImage from "../img/main-image.jpeg";
import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";
import happycowempty from "../img/happycow-empty.jpeg";

import empty from "../img/empty.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../Components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

//Import JSON
import restaurants from "../restaurants.json";

export default function Home() {
  const [inputsearch, setInputsearch] = useState("");
  const [showingRestaurants, setShowingRestaurants] = useState(restaurants);

  ///////////////////// DISPLAY STARS /////////////////////////////
  const displayStars = (num) => {
    const tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i < num) {
        tab.push(
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "goldenrod" }}
            key={i}
          />
        );
      } else {
        tab.push(
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "grey" }}
            key={i}
          />
        );
      }
    }
    return tab;
  };

  ///////////////////// DISPLAY STARS /////////////////////////////

  ///////////////////// ICON CONDITION /////////////////////////////

  const iconCondition = (type) => {
    if (type === "Veg Store") {
      return (
        <img
          style={{ height: "15px", marginRight: "5px" }}
          src={vegstore}
          alt="vegstore-logo"
        />
      );
    }
    if (type === "vegan") {
      return (
        <img
          style={{ height: "15px", marginRight: "5px" }}
          src={veganImage}
          alt="vegan-logo"
        />
      );
    }
    if (type === "vegetarian") {
      return (
        <img
          style={{ height: "15px", marginRight: "5px" }}
          src={vegetarian}
          alt="vegetarian-logo"
        />
      );
    }
    if (type === "veg-options") {
      return (
        <img
          style={{ height: "15px", marginRight: "5px" }}
          src={vegoption}
          alt=""
        />
      );
    }
    if (type === "Ice Cream") {
      return (
        <FontAwesomeIcon
          style={{ height: "15px", marginRight: "5px", color: "#ED5451" }}
          icon="fa-solid fa-ice-cream"
        />
      );
    }
    if (type === "Other") {
      return (
        <FontAwesomeIcon
          style={{ height: "15px", marginRight: "5px", color: "#265490" }}
          icon="fa-solid fa-leaf"
        />
      );
    }
    if (type === "Health Store") {
      return (
        <FontAwesomeIcon
          style={{ height: "15px", marginRight: "5px", color: "#E0C966" }}
          icon="fa-solid fa-store"
        />
      );
    }
    if (type === "Professional") {
      return (
        <FontAwesomeIcon
          style={{ height: "15px", marginRight: "3px", color: "#006739" }}
          icon="fa-solid fa-circle-chevron-down"
        />
      );
    }
  };

  ///////////////////// ICON CONDITIONS /////////////////////////////

  return (
    <div>
      <div className="top">
        <img className="main-image" src={mainImage} alt="burger" />

        <div className="title">
          <h1>Find Vegan Restaurants Nearby</h1>
          <Input
            inputsearch={inputsearch}
            setInputsearch={setInputsearch}
            restaurants={restaurants}
            setShowingRestaurants={setShowingRestaurants}
          />
        </div>
      </div>
      <div className="container">
        <div className="category1">
          <h2>Vegan Food Near Me</h2>
          <Link
            to="/all"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <p className="see-all">View all {">"}</p>
          </Link>
        </div>

        <div className="main">
          {showingRestaurants.slice(0, 10).map((item) => {
            console.log(item.type);
            const adressAndCountry = item.address.split(",");
            // const restaurantDescription = item.description.slice(0, 100);
            return (
              <Link className="restaurant-link" to={"/restaurant"} state={item}>
                <div key={item.placeId} className="restaurants-cards">
                  <div className="icons-picture">
                    <FontAwesomeIcon
                      className="heart"
                      style={{
                        color: "#ED5450",

                        height: "30px",
                        width: "30px",
                      }}
                      icon="heart"
                    />
                    <div className="pictures-condition">
                      {item.thumbnail ? (
                        <img
                          className="restaurant-picture"
                          src={item.thumbnail}
                          alt="restaurants"
                        />
                      ) : (
                        <img src={happycowempty} alt="happycow" />
                      )}
                    </div>
                  </div>
                  <div className="restaurants-title">
                    <p>{iconCondition(item.type)}</p>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="address">
                    <p
                      className="city-country"
                      style={{
                        color: "#777777",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {adressAndCountry[adressAndCountry.length - 3]} ,{" "}
                      {adressAndCountry[adressAndCountry.length - 1]} ,{" "}
                      {adressAndCountry[adressAndCountry.length - 2]}
                    </p>

                    <div className="rating">
                      <p>{displayStars(item.rating)}</p>
                      <p>{item.placeId} reviews</p>
                    </div>
                    <div className="description">
                      {item.description ? (
                        <p>{item.description.slice(0, 100)}...</p>
                      ) : (
                        <p>En cours d'écriture...</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="category2">
          <h2>10 Best Vegan Restaurants in Paris, France</h2>
          <p className="see-10">View all {">"}</p>
        </div>
        <div className="main-10">
          {restaurants
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
            .map((item, index) => {
              return (
                <div className="restaurants-top-cards" key={index}>
                  <img
                    className="restaurant-top-picture"
                    src={item.thumbnail}
                    alt="restaurants-top"
                  />
                  <div className="restaurants-top-title">
                    <p className="iconCondition">{iconCondition(item.type)}</p>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="rating">
                    <p>{displayStars(item.rating)}</p>
                    <p>{item.placeId} reviews</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
