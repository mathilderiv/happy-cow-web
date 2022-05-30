import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";
import icecream from "../img/category_ice-cream.svg";
import other from "../img/category_other.svg";
import professional from "../img/category_vegan-professional.svg";
import healthstore from "../img/category_health-store.svg";
import rest from "../img/rest_icon.svg";

// Import package react leaflet
import L from "leaflet";

export default function IconMarker(type) {
  const vegstoreIcon = new L.Icon({
    iconUrl: vegstore,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const veganIcon = new L.Icon({
    iconUrl: veganImage,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const vegetarianIcon = new L.Icon({
    iconUrl: vegetarian,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const vegOptionsIcon = new L.Icon({
    iconUrl: vegoption,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const iceCreamIcon = new L.Icon({
    iconUrl: icecream,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const otherIcon = new L.Icon({
    iconUrl: other,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const professionnalIcon = new L.Icon({
    iconUrl: professional,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const healthStoreIcon = new L.Icon({
    iconUrl: healthstore,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const restIcon = new L.Icon({
    iconUrl: rest,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  if (type === "Veg Store") {
    return vegstoreIcon;
  } else if (type === "vegan") {
    return veganIcon;
  } else if (type === "vegetarian") {
    return vegetarianIcon;
  } else if (type === "veg-options") {
    return vegOptionsIcon;
  } else if (type === "Ice Cream") {
    return iceCreamIcon;
  } else if (type === "Other") {
    return otherIcon;
  } else if (type === "Health Store") {
    return healthStoreIcon;
  } else if (type === "Professionnal") {
    return professionnalIcon;
  } else {
    return restIcon;
  }
}
