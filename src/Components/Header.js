import logo from "../img/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "./Modal";

const Header = () => {
  //state modal
  const [show, setShow] = useState(false);

  //state form
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:4000/signup", {
            email,
            username,
            password,
          });
          console.log("response", response.data);
          //prévenir le client de la création du compte.
          alert("votre compte a bien été créé");
          setShow(false);
        } catch (error) {
          console.log("catch header", error.response.data);
          if (error.response.data?.message === "Cet username existe déjà") {
            // username déjà pris en BDD
            setError("Cet username existe déjà");
          } else if (error.response.data.message === "Cet email existe déjà") {
            // email déjà pris en BDD
            setError("Cet email existe déjà");
          }
        }
      } else {
        setError("Les mots de passe ne sont identiques");
        //MDP non identique
      }
    } else {
      setError("Vous devez compléter tous les champs");
      //tous les champs doivent être rempli
    }
  };

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

          <Modal
            title="Sign Up"
            onClose={() => {
              setShow(false);
              setError("");
            }}
            show={show}
          >
            <form className="signup-form" onSubmit={handleSubmit}>
              Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              Username
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              Mot de passe
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              Confirmation mot de passe
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm your password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <button className="modal-button" type="submit">
                Créer mon compte
              </button>
              {error && error}
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
