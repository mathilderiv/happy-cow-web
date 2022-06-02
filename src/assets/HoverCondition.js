const HoverCondition = (type) => {
  if (type === "Veg Store") {
    return "vegstore-hover-style";
  } else if (type === "vegetarian") {
    return "vegetarian-hover-style";
  } else if (type === "vegan") {
    return "vegan-hover-style";
  } else if (type === "veg-options") {
    return "vegoptions-hover-style";
  } else if (type === "Ice Cream") {
    return "icecream-hover-style";
  } else if (type === "Other") {
    return "other-hover-style";
  } else if (type === "Health Store") {
    return "healthstore-hover-style";
  } else if (type === "Professionnal") {
  }
  return "professionnal-style";
};

export default HoverCondition;
