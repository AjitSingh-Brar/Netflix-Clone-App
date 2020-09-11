import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  //   const [navbar, setNavbar] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  //   const changeBackground = () => {
  //     if (window.scrollY > 100) {
  //       setNavbar(true);
  //     } else setNavbar(false);
  //     window.addEventListener("scroll", changeBackground);

  //     return () => {
  //       window.removeEventListener("scroll");
  //     };

  return (
    // <div className={navbar ? "navbar" : "nav"}>
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
