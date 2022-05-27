//Import JSON
import restaurants from "../restaurants.json";

const TitleCondition = (type) => {
  if (type.name === "Veg Store") {
    return (
      <div>
        <h2
          style={{
            backgroundColor: "#22820D",
            color: "white",
            marginTop: "25px",
          }}
        ></h2>
      </div>
    );
  }
  if (type.name === "vegetarian") {
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
  }

  if (type.name === "veg-options") {
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
  }

  if (type.name === "Ice Cream") {
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
  }

  if (type.name === "Other") {
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
  }

  if (type.name === "Health Store") {
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
  }

  if (type.name === "Professionnal") {
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
  }
};
export default TitleCondition;
