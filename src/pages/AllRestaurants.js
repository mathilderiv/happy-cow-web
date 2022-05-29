import IconMarker from "../Components/IconMarker";
import DisplayStars from "../Components/DisplayStars";
import IconCondition from "../assets/IconCondition";
import InputAll from "../Components/InputAll";

import restaurants from "../restaurants.json";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

//Import css de la map
import "leaflet/dist/leaflet.css";

export default function AllRestaurants() {
  return (
    <div className="all-the-page">
      <div className="map-all">
        {restaurants.map((item) => {
          return (
            <>
              <div key={item.placeId} className="all-left-part">
                <img
                  className="image"
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  src={item.thumbnail}
                  alt="restaurants"
                />

                <div className="hover">
                  <div className="text">
                    <p className="iconCondition">{IconCondition(item.type)}</p>
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                    <br />
                    {item.address}
                  </div>
                </div>
                <h3
                  style={{
                    marginTop: "5px",
                    marginBottom: "10px",
                    fontSize: "12px",
                    color: "#444444",
                    fontWeight: "bold",
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
            </>
          );
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
              {restaurants.slice(0, 50).map((item, index) => {
                return (
                  <div key={index} className="marker-of-restaurants">
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
