import logo from "../img/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "./Modal";

const Header = () => {
  const [show, setShow] = useState(false);
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
        <div className="app">
          <button onClick={() => setShow(true)} className="login">
            <p>Login / Join</p>
          </button>
          <Modal title="signin" onClose={() => setShow(false)} show={show}>
            <p>Formulaire de signin</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
