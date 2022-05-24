import apple from "../img/apple.png";
import android from "../img/android.png";
import appleApp from "../img/happycow-ios-app.png";
import androidApp from "../img/happycow-android-app.png";
import facebook from "../img/facebook.webp";
import instagram from "../img/instagram.jpg";
import pinterest from "../img/logopinterest.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="list">
          <ul>
            <h3>Community</h3>
            <li>My Profile</li>
            <li>Ambassadors</li>
            <li>Veg Events</li>
            <li>Forum</li>
            <li>Newsletter</li>
            <li>Our Story</li>
            <li>Get Involved</li>
          </ul>

          <ul>
            <h3>About</h3>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Link to us</li>
            <li>Site Map</li>
          </ul>

          <ul>
            <h3>Shop</h3>
            <li>T-Shirts</li>
            <li>Books</li>
          </ul>

          <ul>
            <h3>HappyCow App</h3>
            <li>Over 2 million downlads</li>
            <div className="brand-logo">
              <img className="apple" src={apple} alt="apple logo" />
              <img className="android" src={android} alt="android logo" />
            </div>
            <div className="iphone">
              <img className="iphone-apple" src={appleApp} alt="apple app" />
              <img
                className="iphone-android"
                src={androidApp}
                alt=" android app"
              />
            </div>
          </ul>
          <div className="connect">
            <ul>
              <h3>Connect</h3>
              <div className="media-logo">
                <img className="fb" src={facebook} alt="facebook logo" />
                <img className="youtube" src={youtube} alt="youtube logo" />
                <img className="twitter" src={twitter} alt="twitter logo" />
                <img
                  className="pinterest"
                  src={pinterest}
                  alt="pinterest logo"
                />
                <img
                  className="instagram"
                  src={instagram}
                  alt="instagram logo"
                />
              </div>
              <h3 style={{ marginTop: "1rem" }}>Search the Site</h3>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="left-part">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>DMCA Compliance</p>
          <p>Support HappyCow</p>

          <p style={{ color: "#936dcf" }}>
            All Contents Copyright 1999-2022 HappyCow's Healthy Eating Guide
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
