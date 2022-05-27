import { tab } from "@testing-library/user-event/dist/tab";
import { useLocation } from "react-router-dom";

import IconMarker from "../Components/IconMarker";

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

  //Pour trier avec redirection
  const tab = [];
  for (let i = 0; i < restaurants.length; i++) {
    // console.log(restaurants[i].address.indexOf(inputsearch));
    if (restaurants[i].address.indexOf(inputsearch) !== -1) {
      tab.push(restaurants[i]);
    }
  }

  return (
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
            {tab.map((item) => {
              return (
                <div className="list-of-restaurants">
                  <Marker
                    position={[item.location.lat, item.location.lng]}
                    icon={IconMarker(item.type)}
                  ></Marker>
                  <div className="one-restaurant">
                    <p>{item.name}</p>
                    <img
                      style={{ height: "300px", width: "300px" }}
                      src={item.thumbnail}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </MapContainer>
      </div>
    </div>
  );
}
