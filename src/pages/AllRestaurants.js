import Header from "../Components/Header";

import restaurants from "../restaurants.json";
// console.log(restaurants);

export default function AllRestaurants() {
  return (
    <div className="map-all">
      {restaurants.map((item) => {
        return (
          <>
            <div className="all-left-part">
              <img src={item.thumbnail} />
              <h3>{item.name}</h3>
              <p>{item.address}</p>
              <p>{item.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
