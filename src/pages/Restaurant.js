import { useLocation } from "react-router-dom";

//Import image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";
import category from "../img/category-top.svg";

import noimage from "../img/no-image.png";

//Import Component

import DisplayStars from "../Components/DisplayStars";
import IconCondition from "../assets/IconCondition";
import IconMarker from "../Components/IconMarker";
// import IconCondition from "../Components/IconCondition";

//Import css de la map
import "leaflet/dist/leaflet.css";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Restaurant = () => {
  //Passer les information du restaurant via le LINK
  const location = useLocation();
  const item = location.state; //destructure location.state pour utiliser uniquement item

  return (
    <div className="restaurant-details">
      <div className="details-title">
        <div className="left-details">
          <div>
            <h2
              sytle={{
                color: "white",
              }}
            >
              {item.name}
            </h2>
          </div>
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
          <div className="icon-details">
            <img
              style={{
                height: "40px",
                width: "40px",
                marginTop: "10px",
                marginRight: "5px",
              }}
              src={category}
              alt=""
            />
            <p style={{ marginTop: "20px", marginRight: "5px" }}>
              {IconCondition(item.type)}
            </p>
            <p style={{ marginTop: "20px" }}>{DisplayStars(item.rating)}</p>
            <p style={{ marginTop: "20px", marginLeft: "5px" }}>
              {item.placeId} reviews
            </p>
          </div>
          <div className="button">
            <button className="add-review">
              <div className="line-review">
                <FontAwesomeIcon
                  icon="fa-solid fa-pen"
                  style={{ marginLeft: "5px" }}
                />
                <p style={{ marginLeft: "10px" }}>Add Review</p>
              </div>
            </button>

            <button className="add-photos">
              <div className="line-photos">
                <FontAwesomeIcon
                  icon="fa-solid fa-camera"
                  style={{ marginLeft: "5px" }}
                />
                <p style={{ marginLeft: "10px" }}>Add Photos</p>
              </div>
            </button>
          </div>
        </div>
        <div className="pictures-restaurant">
          <div className="navigation">
            <FontAwesomeIcon
              style={{ fontSize: "12px", color: "black", marginRight: "5px" }}
              icon="fa-solid fa-house"
            />

            <p>/ Europe / France</p>
          </div>
          <div className="center">
            <div className="pictures">
              <img
                style={{
                  height: "100%",
                  width: "50%",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
                src={item.thumbnail}
                alt={item.thumbnail}
              />

              <div className="right-pictures">
                {item.pictures[1] ? (
                  <img
                    style={{
                      height: "162px",
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
                      height: "162px",
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
                      height: "162px",
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
                      height: "162px",
                      width: "160px",
                      borderRadius: "10px",
                      marginRight: "5px",
                      objectFit: "cover",
                    }}
                    src={noimage}
                    alt="nopicture"
                  />
                )}
                <div className="right-bottom-pictures">
                  {item.pictures[3] ? (
                    <img
                      style={{
                        height: "162px",
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
                        height: "162px",
                        width: "160px",
                        borderRadius: "10px",
                        marginRight: "5px",
                        objectFit: "cover",
                      }}
                      src={noimage}
                      alt="nopicture"
                    />
                  )}

                  {item.pictures[4] ? (
                    <img
                      style={{
                        height: "162px",
                        width: "160px",
                        borderRadius: "10px",
                        marginRight: "5px",
                        objectFit: "cover",
                      }}
                      src={item.pictures[4]}
                      alt=""
                    />
                  ) : (
                    <img
                      style={{
                        height: "162px",
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
            </div>

            <div className="map">
              <div style={{ height: "100%" }} id="map">
                <MapContainer
                  style={{ height: "100%" }}
                  center={[item.location.lat, item.location.lng]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[item.location.lat, item.location.lng]}
                    icon={IconMarker(item.type)}
                  ></Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="phone">
              <div className="phone-contact">
                <FontAwesomeIcon
                  style={{
                    height: "20px",
                    width: "20px",
                    marginBottom: "10px",
                  }}
                  icon="fa-solid fa-phone"
                />
                <p style={{ marginLeft: "10px" }}>CONTACT</p>
              </div>
              <p>{item.phone}</p>
            </div>
            <div className="localisation">
              <div className="localisation-find">
                <FontAwesomeIcon
                  style={{
                    height: "20px",
                    width: "20px",
                    marginBottom: "10px",
                  }}
                  icon="fa-solid fa-location-dot"
                />
                <p style={{ marginLeft: "10px" }}>FIND</p>
              </div>
              <p>{item.address}</p>
            </div>
          </div>
          <div className="bottom">
            <p>{item.description}</p>

            <div className="button-bis">
              <button className="add-review-bis">
                <div className="line-review-bis">
                  <FontAwesomeIcon
                    icon="fa-solid fa-pen"
                    style={{ marginLeft: "5px" }}
                  />
                  <p style={{ marginLeft: "10px" }}>Add Review</p>
                </div>
              </button>

              <button className="add-photos-bis">
                <div className="line-photos-bis">
                  <FontAwesomeIcon
                    icon="fa-solid fa-camera"
                    style={{ marginLeft: "5px" }}
                  />
                  <p style={{ marginLeft: "10px" }}>Add Photos</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
