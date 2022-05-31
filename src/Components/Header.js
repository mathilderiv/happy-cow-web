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

  // state pour gérer les erreurs :
  // 0 : pas d'erreur
  // 1 : un ou plusieurs champs sont vides
  // 2 : MDP ne sont pas identiques
  // 3 : email déjà pris en BDD
  // 4 : username déjà pris en BDD

  const [error, setError] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(0);

    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:4000/signin", {
            email,
            username,
            password,
          });
          console.log(response.data);
        } catch (error) {
          console.log(error.response.data);
          if (error.response.data.message === "Ce username est déjà utilisé") {
            // username déjà pris en BDD
            setError(4);
          } else if (
            error.response.data.message === "Cet email est déjà utilisé"
          ) {
            // email déjà pris en BDD
            setError(3);
          }
        }
      } else {
        setError(2);
        //MDP non identique
      }
    } else {
      setError(1);
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

          <Modal title="Sign Up" onClose={() => setShow(false)} show={show}>
            <form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm your password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />

              <button type="submit">Créer mon compte</button>
              {error === 1 ? (
                <p>Vous devez remplir tous les champs</p>
              ) : error === 2 ? (
                <p>Les 2 mots de passe ne sont pas identiques</p>
              ) : error === 3 ? (
                <p>Cet email est déjà utilisé</p>
              ) : error === 4 ? (
                <p>Ce username est déjà utilisé</p>
              ) : null}
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
