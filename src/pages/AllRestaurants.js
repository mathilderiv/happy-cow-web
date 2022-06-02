import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import IconMarker from "../Components/IconMarker";
import DisplayStars from "../Components/DisplayStars";
import IconConditionAll from "../assets/IconConditionAll";
import InputAll from "../Components/InputAll";
import Filters from "../Components/Filters";

import restaurants from "../restaurants.json";

// Import package react leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//Import css de la map
import "leaflet/dist/leaflet.css";

export default function AllRestaurants() {
  //Input
  const [inputsearch, setInputsearch] = useState("");
  const [showingRestaurants, setShowingRestaurants] = useState(restaurants);

  //Pages
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

  //Filtres
  const [types, setTypes] = useState([
    "Veg Store",
    "vegan",
    "vegetarian",
    "veg-options",
    "Ice Cream",
    "Other",
    "Health Store",
    "Professionnal",
  ]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filter && filter !== "reset") {
      const restaurantsTemp = restaurants.filter((restaurant) => {
        return restaurant.type === filter;
      });
      setShowingRestaurants([...restaurantsTemp]);
    } else {
      setShowingRestaurants(restaurants);
    }
  }, [filter]);

  // Survol marker
  // const [isShown, setIsShown] = useState(false);

  // function bigImg(x) {
  //   x.style.height = "64px";
  //   x.style.width = "64px";
  // }

  // function normalImg(x) {
  //   x.style.height = "32px";
  //   x.style.width = "32px";
  // }

  // pour trier sur la page home
  const handleSubmit = (event) => {
    event.preventDefault();

    const tab = [];
    for (let i = 0; i < restaurants.length; i++) {
      // console.log(restaurants[i].address.indexOf(inputsearch));
      if (
        restaurants[i].address
          .toLowerCase()
          .indexOf(inputsearch.toLowerCase()) !== -1
      ) {
        tab.push(restaurants[i]);
      }
    }
    setShowingRestaurants(tab);
  };

  console.log("filter", filter);
  return (
    <div className="all-the-page">
      <div className="map-all">
        <div className="pagination">
          <InputAll
            inputsearch={inputsearch}
            setInputsearch={setInputsearch}
            restaurants={restaurants}
            setShowingRestaurants={setShowingRestaurants}
            handleSubmit={handleSubmit}
          />

          <div className="flex">
            {types.map((type, index) => {
              return <Filters key={index} type={type} setFilter={setFilter} />;
            })}
            <Filters type="reset" setFilter={setFilter} />
          </div>

          <div className="setPage">
            {page !== 1 && (
              <button
                className="page-minus"
                onClick={() => {
                  setPage(page - 1);
                  setSkip((page - 2) * 50); //il faut laisser le temps à setPage de se mettre à jour
                }}
              >
                Page précédente
              </button>
            )}

            <button
              className="page-add"
              onClick={() => {
                setPage(page + 1);
                setSkip(page * 50); //il faut laisser le temps à setPage de se mettre à jour
              }}
            >
              Page suivante
            </button>
          </div>
        </div>

        {showingRestaurants.map((item, index) => {
          if (skip <= index && index <= skip + 49) {
            //skip par défaut vaut 0
            // console.log(index);
            return (
              <Link
                key={index}
                to="/restaurant"
                style={{ textDecoration: "none" }}
                state={item}
              >
                <div className="all-left-part">
                  <img
                    // onMouseEnter={() => setIsShown(true)}
                    // onMouseLeave={() => setIsShown(false)}
                    className="image"
                    style={{
                      width: "100%",
                      height: "60%",
                      objectFit: "cover",
                    }}
                    src={item.thumbnail}
                    alt="restaurants"
                  />

                  <div className="hover">
                    <div className="text">
                      <p className="iconCondition">
                        {IconConditionAll(item.type)}
                      </p>
                      <p style={{ fontWeight: "bold" }}>{item.name}</p>
                      <br />
                      {item.address}
                    </div>
                  </div>
                  <h3
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      fontSize: "10px",
                      color: "#444444",
                      fontWeight: "bold",
                      margin: "none",
                    }}
                  >
                    {item.name.toUpperCase()}
                  </h3>

                  <div style={{}} className="stars">
                    <p style={{ marginBottom: "5px" }}>
                      {DisplayStars(item.rating)}
                    </p>
                    <p
                      style={{
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#444444",
                      }}
                    >
                      {"("}
                      {item.placeId}
                      {")"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div
        className="global-map"
        style={{
          width: "50%",
          height: "100vh",
        }}
      >
        <div style={{ height: "100%" }} id="map">
          <MapContainer
            style={{ height: "100%" }}
            center={[48.856614, 2.3522219]}
            zoom={12}
            scrollWheelZoom={true}
            keyboard={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <div className="map-all-restaurants">
              {showingRestaurants.map((item, index) => {
                return (
                  <div key={index} className="marker-of-restaurants">
                    <Marker
                      // onMouseEnter="bigImg(this)"
                      // onMouseLeave="normalImg(this)"
                      // border="0"
                      position={[item.location.lat, item.location.lng]}
                      icon={IconMarker(item.type)}
                    >
                      <Popup
                        minWidth={200}
                        maxWidth={200}
                        minHeight={350}
                        maxHeight={350}
                      >
                        <div className="popup-picture">
                          <img
                            style={{
                              height: "20%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            src={item.thumbnail}
                            alt={item.thumbnail}
                          />
                        </div>

                        <div
                          className="popup-details"
                          // style={{
                          //   width: "100%",
                          //   height: "20%",
                          // }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/restaurant"}
                            state={item}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#7D4EC4",
                                width: "100%",
                                textAlign: "center",
                              }}
                            >
                              {item.name}
                            </p>
                          </Link>

                          <p style={{ textAlign: "center" }}>{item.address}</p>
                        </div>
                      </Popup>
                    </Marker>
                  </div>
                );
              })}
            </div>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
