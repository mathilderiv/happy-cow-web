import logo from "../img/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "./Modal";
import ModalLogin from "./ModalLogin";

const Header = () => {
  //state modal
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  //state form
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //State pour l'affichage ou non du bouton deconnexion

  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const [error, setError] = useState("");

  let handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

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
          // console.log("response", response.data);
          ///Enregistrement du token dans les cookies

          handleToken(response.data.token);
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

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        username,
        password,
      });
      // console.log(response.data);
      handleToken(response.data.token);
      alert("Bienvenu sur HappyCow");
    } catch (error) {
      console.log(error);
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
          {!userToken ? (
            <>
              <button onClick={() => setShow(true)} className="signup">
                <p>Signup</p>
              </button>
              <button onClick={() => setShowLogin(true)} className="login">
                <p>Login</p>
              </button>{" "}
            </>
          ) : (
            <button
              className="logout"
              onClick={() => {
                handleToken();
              }}
            >
              <p>Logout</p>
            </button>
          )}

          <Modal
            title="Sign Up"
            onClose={() => {
              setShow(false);
              setError("");
            }}
            show={show}
            handleToken={handleToken}
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

          <ModalLogin
            title="Log in"
            onClose={() => {
              setShowLogin(false);
              handleToken = { handleToken };
            }}
            showLogin={showLogin}
          >
            <form className="signup-form-login" onSubmit={handleSubmitLogin}>
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
              <button className="modal-button" type="submit">
                Login
              </button>
            </form>
          </ModalLogin>
        </div>
      </div>
    </div>
  );
};

export default Header;
