import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AllRestaurants from "./pages/AllRestaurants";
import Restaurant from "./pages/Restaurant";
import Research from "./pages/Research";

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
  faPhone,
  faLocationDot,
  faPen,
  faCamera,
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
  faCircleChevronDown,
  faPhone,
  faLocationDot,
  faPen,
  faCamera
);
//////////////////////FontAwesome/////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allRestaurants" element={<AllRestaurants />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
