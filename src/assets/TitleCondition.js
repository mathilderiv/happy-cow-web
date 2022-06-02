const TitleCondition = (type) => {
  if (type === "Veg Store") {
    return "vegstore-style";
  } else if (type === "vegetarian") {
    return "vegetarian-style";
  } else if (type === "vegan") {
    return "vegan-style";
  } else if (type === "veg-options") {
    return "vegoptions-style";
  } else if (type === "Ice Cream") {
    return "icecream-style";
  } else if (type === "Other") {
    return "other-style";
  } else if (type === "Health Store") {
    return "healthstore-style";
  } else if (type === "Professionnal") {
  }
  return "professionnal-style";
};

export default TitleCondition;
