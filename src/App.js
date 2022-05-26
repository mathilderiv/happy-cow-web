import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AllRestaurants from "./pages/AllRestaurants";
import Restaurant from "./pages/Restaurant";

//////////////////////FontAwesome/////////////////////////////////
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
  faHeart,
  faArrowUpFromBracket,
  faPlaneDeparture,
  faBookmark,
  faHouse,
  faIceCream,
  faLeaf,
  faStore,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faStar,
  faHeart,
  faStarHalfStroke,
  faArrowUpFromBracket,
  faPlaneDeparture,
  faBookmark,
  faHouse,
  faIceCream,
  faLeaf,
  faStore,
  faCircleChevronDown
);
//////////////////////FontAwesome/////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllRestaurants />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
