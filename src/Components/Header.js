import logo from "../img/logo.svg";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo-happycow" src={logo} alt="HappyCow logo" />
        </div>
      </Link>
      <div className="menu">
        <p>Explore</p>
        <p>Forum</p>
        <p>Blog</p>
        <p>Community</p>
        <p>The App</p>
        <p>Shop</p>
        <p>More</p>
      </div>
      <div className="right-part">
        <FontAwesomeIcon
          style={{
            color: "#7b4ec3",
            fontSize: "28px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          icon="fa-solid fa-magnifying-glass"
        />

        <button className="add">
          <p>Add Listing</p>
        </button>

        <button className="login">
          <p>Login / Join</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
