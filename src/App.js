import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import AllRestaurants from "./pages/AllRestaurants";
import Restaurant from "./pages/Restaurant";

//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faStar, faHeart);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllRestaurants />} />
          <Route path="restaurant" element={<Restaurant />} />
        </Routes>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
