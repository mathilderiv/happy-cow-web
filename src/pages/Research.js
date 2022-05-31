import { tab } from "@testing-library/user-event/dist/tab";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import IconMarker from "../Components/IconMarker";
import DisplayStars from "../Components/DisplayStars";
import IconConditionAll from "../assets/IconConditionAll";
import InputAll from "../Components/InputAll";

//Import JSON
import restaurants from "../restaurants.json";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

//Import css de la map
import "leaflet/dist/leaflet.css";

export default function Research() {
  const location = useLocation();
  const { inputsearch } = location.state;

  //Pages
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

  //Pour trier avec redirection
  const tab = [];
  for (let i = 0; i < restaurants.length; i++) {
    // console.log(restaurants[i].address.indexOf(inputsearch));
    if (
      restaurants[i].address
        .toLowerCase()
        .indexOf(inputsearch.toLowerCase()) !== -1
    ) {
      tab.push(restaurants[i]);
    } else {
      break;
    }
  }

  return (
    <div className="global-map-research">
      <div className="pagination-research">
        <div className="setPage-research">
          {page !== 1 && (
            <button
              className="page-minus-research"
              onClick={() => {
                setPage(page - 1);
                setSkip((page - 2) * 50); //il faut laisser le temps à setPage de se mettre à jour
              }}
            >
              Page précédente
            </button>
          )}

          <button
            className="page-add-research"
            onClick={() => {
              setPage(page + 1);
              setSkip(page * 50); //il faut laisser le temps à setPage de se mettre à jour
            }}
          >
            Page suivante
          </button>
        </div>
        <div className="left-part-research">
          {tab.map((item, index) => {
            if (skip <= index && index <= skip + 49) {
              return (
                <div key={item.placeId} className="one-restaurant">
                  <img
                    style={{
                      height: "60%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={item.thumbnail}
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
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      fontSize: "12px",
                      color: "#444444",
                      fontWeight: "bold",
                      margin: "none",
                      textAlign: "center",
                    }}
                  >
                    {item.name.toUpperCase()}
                  </p>
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
              );
            }
          })}
        </div>
      </div>

      <div className="right-part-research">
        <div style={{ height: "100%" }} id="map">
          <MapContainer
            style={{ height: "100%" }}
            center={[48.856614, 2.3522219]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <div className="tab-map">
              {tab.map((item, index) => {
                return (
                  <div key={index} className="list-of-restaurants">
                    <Marker
                      position={[item.location.lat, item.location.lng]}
                      icon={IconMarker(item.type)}
                    ></Marker>
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
