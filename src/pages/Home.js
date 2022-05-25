import mainImage from "../img/main-image.jpeg";
import veganImage from "../img/category_vegan.svg";
import empty from "../img/empty.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../Components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

//Import JSON
import restaurants from "../restaurants.json";
// const test = restaurants.sort(function (b, a) {
//   return a.placeId - b.placeId;
// });
// console.log(test);

export default function Home() {
  const [inputsearch, setInputsearch] = useState("");

  //DisplayStars
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

  //input search
  const tab = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].address.indexOf(inputsearch) !== -1) {
      if (tab.lenght < 20) {
        tab.push(<p key={restaurants[i].placeId}>{restaurants[i].name}</p>);
      }
    } else {
      break;
    }
  }

  return (
    <div>
      <div className="top">
        <img className="main-image" src={mainImage} alt="burger" />

        <div className="title">
          <h1>Find Vegan Restaurants Nearby</h1>
          <Input inputsearch={inputsearch} setInputsearch={setInputsearch} />
          {tab}
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
          {restaurants.slice(0, 10).map((item) => {
            const adressAndCountry = item.address.split(",");
            const restaurantDescription = item.description.slice(0, 100);
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
                    <div>
                      <img
                        className="restaurant-picture"
                        src={item.thumbnail}
                        alt="restaurants"
                      />
                    </div>
                  </div>
                  <div className="restaurants-title">
                    <img
                      style={{ height: "15px", marginRight: "3px" }}
                      src={veganImage}
                      alt="vegan"
                    />
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
                    <div>
                      <p className="description">{restaurantDescription}...</p>
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
                    <img
                      style={{ height: "15px", marginRight: "3px" }}
                      src={veganImage}
                      alt="vegan"
                    />
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
