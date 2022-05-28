//Import JSON
import restaurants from "../restaurants.json";

export default function TitleCondition(type) {
  if (type === "Veg Store") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#22820D",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "vegetarian") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#8A2091",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "veg-options") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#DC5E5C",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "Ice Cream") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#B0305B",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "Other") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#3775C5",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "Health Store") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#B59905",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else if (type === "Professionnal") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#006739",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#4D57A7",
            color: "white",
            marginTop: "25px",
          }}
        >
          {type.name}
        </h2>
      </div>
    );
  }
}
