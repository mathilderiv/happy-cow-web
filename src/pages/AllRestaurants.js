import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import IconMarker from "../Components/IconMarker";
import DisplayStars from "../Components/DisplayStars";
import IconConditionAll from "../assets/IconConditionAll";
import InputAll from "../Components/InputAll";

import restaurants from "../restaurants.json";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

//Import css de la map
import "leaflet/dist/leaflet.css";

export default function AllRestaurants() {
  //Input
  const [inputsearch, setInputsearch] = useState("");
  const [showingRestaurants, setShowingRestaurants] = useState(restaurants);

  //Pages
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

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

  return (
    <div className="all-the-page">
      <div className="map-all">
        <div className="pagination">
          <InputAll
            inputsearch={inputsearch}
            setInputsearch={setInputsearch}
            restaurants={restaurants}
            setShowingRestaurants={setShowingRestaurants}
          />

          <div className="setPage">
            {page !== 1 && (
              <button
                className="page-minus"
                onClick={() => {
                  setPage(page - 1);
                  setSkip((page - 2) * 50);
                }}
              >
                Page précédente
              </button>
            )}

            <button
              className="page-add"
              onClick={() => {
                setPage(page + 1);
                setSkip(page * 50);
              }}
            >
              Page suivante
            </button>
          </div>
        </div>

        {restaurants.map((item, index) => {
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
            zoom={13}
            scrollWheelZoom={true}
            keyboard={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <div className="map-all-restaurants">
              {restaurants.map((item, index) => {
                return (
                  <div key={index} className="marker-of-restaurants">
                    <Marker
                      position={[item.location.lat, item.location.lng]}
                      icon={IconMarker(item.type)}
                    >
                      <Popup
                        minWidth={180}
                        maxWidth={180}
                        minHeight={280}
                        maxHeight={280}
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
