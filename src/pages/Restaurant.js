import { useLocation } from "react-router-dom";

//Import image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";

import noimage from "../img/no-image.png";

import DisplayStars from "../Components/DisplayStars";

import IconCondition from "../Components/IconCondition";

//Import css de la map
import "leaflet/dist/leaflet.css";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Restaurant = () => {
  //Passer les information du restaurant via le LINK
  const location = useLocation();
  const item = location.state; //destructure location.state pour utiliser uniquement item

  /////////////////////MARKER/////////////////////////////

  const exempleIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/vegstore-category-logo.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const vegstoreIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/vegstore-category-logo.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const veganIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/category_vegan.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const vegetarianIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/vegetatian-logo.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const vegOptionsIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/veg-options-logo.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const iceCreamIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/category_ice-cream.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const otherIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/category_other.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const professionnalIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/category_vegan-professional.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const healthStoreIcon = new L.Icon({
    iconUrl: "http://127.0.0.1:5500/src/img/category_health-store.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  /////////////////////MARKER/////////////////////////////

  return (
    <div className="restaurant-details">
      <div className="details-title">
        <div className="left-details">
          <h2 style={{ color: "white", marginTop: "25px" }}>{item.name}</h2>
        </div>
        <div className="right-details">
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "18px", marginRight: "2rem" }}
            icon="fa-solid fa-arrow-up-from-bracket"
          />
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "18px", marginRight: "2rem" }}
            icon="fa-solid fa-plane-departure"
          />
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "18px", marginRight: "2rem" }}
            icon="fa-solid fa-bookmark"
          />
        </div>
      </div>
      <div className="container">
        <div className="icons-details">
          <p>{DisplayStars(item.rating)}</p>
          <p>{item.placeId} reviews</p>
        </div>
        <div className="pictures-restaurant">
          <div className="navigation">
            <FontAwesomeIcon
              style={{ fontSize: "12px", color: "grey", marginRight: "2px" }}
              icon="fa-solid fa-house"
            />

            <p>/ Europe / France</p>
          </div>
          <div className="center">
            <div className="main-picture">
              <img
                style={{
                  height: "100%",
                  width: "80%",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
                src={item.thumbnail}
                alt={item.thumbnail}
              />
            </div>
            <div className="right-pictures">
              {item.pictures[1] ? (
                <img
                  style={{
                    height: "160px",
                    width: "160px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    objectFit: "cover",
                  }}
                  src={item.pictures[1]}
                  alt=""
                />
              ) : (
                <img
                  style={{
                    height: "160px",
                    width: "160px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    objectFit: "cover",
                  }}
                  src={noimage}
                  alt="nopicture"
                />
              )}

              {item.pictures[2] ? (
                <img
                  style={{
                    height: "160px",
                    width: "160px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    objectFit: "cover",
                  }}
                  src={item.pictures[2]}
                  alt=""
                />
              ) : (
                <img
                  style={{
                    height: "160px",
                    width: "160px",
                    borderRadius: "10px",
                    marginRight: "5px",
                    objectFit: "cover",
                  }}
                  src={noimage}
                  alt="nopicture"
                />
              )}
              <div className="last-picture">
                {item.pictures[3] ? (
                  <img
                    style={{
                      height: "160px",
                      width: "160px",
                      borderRadius: "10px",
                      marginRight: "5px",
                      objectFit: "cover",
                    }}
                    src={item.pictures[3]}
                    alt=""
                  />
                ) : (
                  <img
                    style={{
                      height: "160px",
                      width: "160px",
                      borderRadius: "10px",
                      marginRight: "5px",
                      objectFit: "cover",
                    }}
                    src={noimage}
                    alt="nopicture"
                  />
                )}
              </div>
            </div>
            <div className="map">
              <div style={{ height: "100%" }} id="map">
                <MapContainer
                  style={{ height: "100%" }}
                  center={[48.856614, 2.3522219]}
                  zoom={11}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[item.location.lat, item.location.lng]}
                    icon={exempleIcon}
                    // icon={IconCondition()}
                  >
                    {/* <Popup>
                      <img src={vegstore} alt="location-store" />
                    </Popup> */}
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
