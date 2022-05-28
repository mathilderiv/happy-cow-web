import IconMarker from "../Components/IconMarker";

import restaurants from "../restaurants.json";

// Import package react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

//Import css de la map
import "leaflet/dist/leaflet.css";

export default function AllRestaurants() {
  return (
    <>
      <div className="map-all">
        {restaurants.map((item) => {
          return (
            <>
              <div key={item.placeId} className="all-left-part">
                <img src={item.thumbnail} />
                <h3>{item.name}</h3>
                <p>{item.address}</p>
                <p>{item.description}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="global-map">
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

            <div className="tab-map">
              {restaurants.map((item, index) => {
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
    </>
  );
}
