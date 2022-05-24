import mainImage from "../img/main-image.jpeg";
import veganImage from "../img/category_vegan.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../Components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

//Import JSON
import restaurants from "../restaurants.json";
console.log(restaurants);

export default function Home() {
  const displayStars = (num) => {
    const tab = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        tab.push(
          <FontAwesomeIcon
            style={{ color: "#FFD700" }}
            icon="fa-solid fa-star"
          />
        );
      } else {
        tab.push(
          <FontAwesomeIcon
            style={{ color: "#FFD700" }}
            icon="fa-thin fa-star"
          />
        );
      }
    }
    return tab;
  };

  return (
    <div>
      <div className="top">
        <img className="main-image" src={mainImage} alt="burger picture" />

        <div className="title">
          <h1>Find Vegan Restaurants Nearby</h1>
          <Input />
        </div>
      </div>
      <div className="container">
        <div className="category">
          <h2>Vegan Food Near Me</h2>
          <Link
            to="/all"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <p className="see-all">View all ></p>
          </Link>
        </div>
        <Link className="restaurant-link" to="/restaurant">
          <div className="main">
            {restaurants.slice(0, 10).map((item) => {
              return (
                <>
                  <div key={item.placeId} className="restaurants-cards">
                    <div className="icons-picture">
                      <FontAwesomeIcon
                        style={{
                          color: "#ED5450",
                          border: "1px black solid",
                          height: "20px",
                          width: "10px",
                        }}
                        icon="fa-thin fa-heart"
                      />
                      <img
                        className="restaurant-picture"
                        src={item.thumbnail}
                        alt="restaurants-pictures"
                      />
                    </div>
                    <div className="restaurants-title">
                      <img
                        style={{ height: "15px", marginRight: "3px" }}
                        src={veganImage}
                        alt="vegan-picture"
                      />
                      <h3>{item.name}</h3>
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#777777",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {item.address}
                      </p>
                      <div className="rating">
                        <p>{displayStars(item.rating)}</p>
                        <p>{item.placeId} reviews</p>
                      </div>
                      <div className="description">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
}
