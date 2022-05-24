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
          <p>{displayStars(item.rating)}</p>
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
                  height: "335px",
                  width: "335px",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
                src={item.thumbnail}
                alt={item.thumbnail}
              />
            </div>
            <div className="right-pictures">
              <img
                style={{
                  height: "160px",
                  width: "160px",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
                src={item.pictures[1]}
                alt=""
              />
              <img
                style={{
                  height: "160px",
                  width: "160px",
                  borderRadius: "10px",
                }}
                src={item.pictures[2]}
                alt=""
              />
              <div className="last-picture">
                <img
                  style={{
                    height: "160px",
                    width: "160px",
                    borderRadius: "10px",
                    marginTop: "5px",
                  }}
                  src={item.pictures[3]}
                  alt=""
                />
              </div>
            </div>
            <div className="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
