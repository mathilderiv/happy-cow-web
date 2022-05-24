import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { placeId } = useParams();
  return (
    <div className="restaurant-details">
      <p>The restaurant id is : {placeId} </p>
    </div>
  );
};

export default Restaurant;
