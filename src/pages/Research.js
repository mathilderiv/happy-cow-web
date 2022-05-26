import { tab } from "@testing-library/user-event/dist/tab";
import { useLocation } from "react-router-dom";

//Import JSON
import restaurants from "../restaurants.json";

export default function Research() {
  const location = useLocation();
  const { inputsearch } = location.state;

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  const tab = [];
  for (let i = 0; i < restaurants.length; i++) {
    // console.log(restaurants[i].address.indexOf(inputsearch));
    if (restaurants[i].address.indexOf(inputsearch) !== -1) {
      // if (tab.length < 20) {
      tab.push(restaurants[i]);
      // } else {
      //   break;
      // }
    }
  }

  return (
    <div>
      {tab.map((item) => {
        return <div> {item.name}</div>;
      })}
    </div>
  );
}
