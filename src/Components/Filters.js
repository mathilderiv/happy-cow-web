import React, { useEffect, useState } from "react";

import Vegan from "../img/category_vegan.svg";
import Vegstore from "../img/vegstore-category-logo.svg";
import Vegetarian from "../img/vegetatian-logo.svg";
import Vegoption from "../img/veg-options-logo.svg";
import Icecream from "../img/category_ice-cream.svg";
import Other from "../img/category_other.svg";
import Professionnal from "../img/category_vegan-professional.svg";
import Healthstore from "../img/category_health-store.svg";
import Rest from "../img/rest_icon.svg";
import Reset from "../img/reset.png";

function Filters({ type, setFilter }) {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (type === "Veg Store") {
      setIcon(Vegstore);
    } else if (type === "vegan") {
      setIcon(Vegan);
    } else if (type === "vegetarian") {
      setIcon(Vegetarian);
    } else if (type === "veg-options") {
      setIcon(Vegoption);
    } else if (type === "Ice Cream") {
      setIcon(Icecream);
    } else if (type === "Other") {
      setIcon(Other);
    } else if (type === "Health Store") {
      setIcon(Healthstore);
    } else if (type === "Professionnal") {
      setIcon(Professionnal);
    } else if (type === "reset") {
      setIcon(Reset);
    } else {
      setIcon(Rest);
    }
  }, []);

  return (
    <div className="icon-filter" onClick={() => setFilter(type)}>
      <img style={{ height: "2rem", width: "2rem" }} src={icon} />
      <p style={{ fontSize: "12px" }}>{type}</p>
    </div>
  );
}

export default Filters;
