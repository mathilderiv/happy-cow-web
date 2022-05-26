import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faLeaf,
  faIceCream,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStore, faLeaf, faIceCream, faCircleChevronDown);

const IconCondition = (type) => {
  if (type === "Veg Store") {
    return (
      <img
        style={{ height: "15px", marginRight: "5px" }}
        src={vegstore}
        alt="vegstore-logo"
      />
    );
  }
  if (type === "vegan") {
    return (
      <img
        style={{ height: "15px", marginRight: "5px" }}
        src={veganImage}
        alt="vegan-logo"
      />
    );
  }
  if (type === "vegetarian") {
    return (
      <img
        style={{ height: "15px", marginRight: "5px" }}
        src={vegetarian}
        alt="vegetarian-logo"
      />
    );
  }
  if (type === "veg-options") {
    return (
      <img
        style={{ height: "15px", marginRight: "5px" }}
        src={vegoption}
        alt=""
      />
    );
  }
  if (type === "Ice Cream") {
    return (
      <FontAwesomeIcon
        style={{ height: "15px", marginRight: "5px", color: "#ED5451" }}
        icon="fa-solid fa-ice-cream"
      />
    );
  }
  if (type === "Other") {
    return (
      <FontAwesomeIcon
        style={{ height: "15px", marginRight: "5px", color: "#265490" }}
        icon="fa-solid fa-leaf"
      />
    );
  }
  if (type === "Health Store") {
    return (
      <FontAwesomeIcon
        style={{ height: "15px", marginRight: "5px", color: "#E0C966" }}
        icon="fa-solid fa-store"
      />
    );
  }
  if (type === "Professional") {
    return (
      <FontAwesomeIcon
        style={{ height: "15px", marginRight: "3px", color: "#006739" }}
        icon="fa-solid fa-circle-chevron-down"
      />
    );
  }
};
export default IconCondition;
