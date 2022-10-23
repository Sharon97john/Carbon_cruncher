import React from "react";
import { Navbar, Logo } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faAward, faBars } from "@fortawesome/free-solid-svg-icons";
const NavbarComponent = () => {
  const navigateTo = (name) => {
  };
  return (
    <Navbar>
      <div className="header p-0 m-0">
        <div className="inner-header">
          <div className="logo" onClick={navigateTo('home')}>
            <Logo src="/images/Logo.png" />
          </div>
          <div className="logo page-icon" onClick={navigateTo('challenge')}>
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <div className="logo page-icon" onClick={navigateTo('rewards')}>
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="bulbtree">
          <img src="/images/bulbtree3.jpg" />
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
