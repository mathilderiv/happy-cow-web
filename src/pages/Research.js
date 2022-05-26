import { tab } from "@testing-library/user-event/dist/tab";
import { useLocation } from "react-router-dom";

//Import JSON
import restaurants from "../restaurants.json";

export default function Research() {
  const location = useLocation();
  const { inputsearch } = location.state;

  //Pour trier avec redirection
  const tab = [];
  for (let i = 0; i < restaurants.length; i++) {
    // console.log(restaurants[i].address.indexOf(inputsearch));
    if (restaurants[i].address.indexOf(inputsearch) !== -1) {
      tab.push(restaurants[i]);
    }
  }

  return (
    <div>
      {tab.map((item) => {
        return (
          <div>
            {item.name}
            <img src={item.thumbnail} />
          </div>
        );
      })}
    </div>
  );
}
