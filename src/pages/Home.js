import mainImage from "../img/main-image.jpeg";
// import veganImage from "../img/category_vegan.svg";
// import vegstore from "../img/vegstore-category-logo.svg";
// import vegetarian from "../img/vegetatian-logo.svg";
// import vegoption from "../img/veg-options-logo.svg";
import happycowempty from "../img/happycow-empty.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { useState } from "react";

//Import JSON
import restaurants from "../restaurants.json";

//Import component
import Input from "../Components/Input";
import DisplayStars from "../Components/DisplayStars";
import IconCondition from "../assets/IconCondition";

export default function Home() {
  const [inputsearch, setInputsearch] = useState("");
  const [showingRestaurants, setShowingRestaurants] = useState(restaurants);

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
          <h2>All Vegan Food</h2>
          <Link
            to="/allRestaurants"
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
          {showingRestaurants.slice(0, 20).map((item) => {
            // console.log(item.type);
            const adressAndCountry = item.address.split(",");

            return (
              <Link className="restaurant-link" to={"/restaurant"} state={item}>
                <div className="carroussel">
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
                      <p>{IconCondition(item.type)}</p>
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
                        <p>{DisplayStars(item.rating)}</p>
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
                <Link
                  key={index}
                  className="best-link"
                  to={"/restaurant"}
                  state={item}
                >
                  {/* <div className="restaurants-top-cards" key={index}> */}
                  <div className="pictures-condition">
                    {item.thumbnail ? (
                      <img
                        className="restaurant-top-picture"
                        src={item.thumbnail}
                        alt="restaurants"
                      />
                    ) : (
                      <img src={happycowempty} alt="happycow" />
                    )}
                  </div>
                  <div className="restaurants-top-title">
                    <p className="iconCondition">{IconCondition(item.type)}</p>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="rating-top">
                    <p>{DisplayStars(item.rating)}</p>
                    <p>{item.placeId} reviews</p>
                  </div>
                  {/* </div> */}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
