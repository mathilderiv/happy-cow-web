import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Restaurant = () => {
  //Passer les information du restaurant via le LINK
  const location = useLocation();
  const item = location.state; //destructure location.state pour utiliser uniquement item

  //DisplayStars

  const displayStars = (num) => {
    const tab = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        tab.push(
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "goldenrod" }}
            key={i}
          />
        );
      } else {
        tab.push(
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "grey" }}
            key={i}
          />
        );
      }
    }
    return tab;
  };

  return (
    <div className="restaurant-details">
      <div className="title">
        <p>{item.name}</p>
      </div>
      <p>{displayStars(item.rating)}</p>
      <p>{item.placeId} reviews</p>
    </div>
  );
};

export default Restaurant;
